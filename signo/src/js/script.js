function calcular() {

    var diaTxt = document.getElementById("dia").value;
    var mesTxt = document.getElementById("mes").value;
    var anoTxt = document.getElementById("ano").value;


    if (isNaN(anoTxt) || anoTxt == "") {
        alert("O ano não pode ser vazio ou conter letras!");
        return;
    }
    if (anoTxt.length != 4) {
        alert("Digite o ano com 4 dígitos!");
        return;
    }

    var a_ani = parseInt(anoTxt);
    var hoje = new Date();

    if (a_ani > hoje.getFullYear()) {
        alert("O ano não pode ser no futuro!");
        return;
    }

    // 2. TRATAMENTO DE ERRO DO MÊS (1 a 12)
    if (isNaN(mesTxt) || mesTxt == "") {
        alert("O mês não pode ser vazio!");
        return;
    }

    var m_ani = parseInt(mesTxt);
    if (m_ani < 1 || m_ani > 12) {
        alert("O mês deve ser entre 1 e 12!");
        return;
    }

    if (isNaN(diaTxt) || diaTxt == "") {
        alert("O dia não pode ser vazio!");
        return;
    }

    var d_ani = parseInt(diaTxt);

   
    var ehBissexto = (a_ani % 4 == 0 && a_ani % 100 != 0) || (a_ani % 400 == 0);


    if (m_ani == 2) {
        if (ehBissexto && (d_ani < 1 || d_ani > 29)) {
            alert("É ano bissexto! O dia para Fevereiro deve ser entre 1 e 29.");
            return;
        } else if (!ehBissexto && (d_ani < 1 || d_ani > 28)) {
            alert("Não é ano bissexto! O dia para Fevereiro deve ser entre 1 e 28.");
            return;
        }
    } 
   
    else if (m_ani == 4 || m_ani == 6 || m_ani == 9 || m_ani == 11) {
        if (d_ani < 1 || d_ani > 30) {
            alert("Este mês possui apenas 30 dias!");
            return;
        }
    } 

    else {
        if (d_ani < 1 || d_ani > 31) {
            alert("Este mês possui no máximo 31 dias!");
            return;
        }
    }



    var dataNasc = new Date(a_ani, m_ani - 1, d_ani);

   
    var nomeMes = "";
    if (m_ani == 1) nomeMes = "Janeiro";
    else if (m_ani == 2) nomeMes = "Fevereiro";
    else if (m_ani == 3) nomeMes = "Março";
    else if (m_ani == 4) nomeMes = "Abril";
    else if (m_ani == 5) nomeMes = "Maio";
    else if (m_ani == 6) nomeMes = "Junho";
    else if (m_ani == 7) nomeMes = "Julho";
    else if (m_ani == 8) nomeMes = "Agosto";
    else if (m_ani == 9) nomeMes = "Setembro";
    else if (m_ani == 10) nomeMes = "Outubro";
    else if (m_ani == 11) nomeMes = "Novembro";
    else if (m_ani == 12) nomeMes = "Dezembro";

    document.getElementById("resMes").value = nomeMes;

    // Nome do Dia da Semana
    var numSemana = dataNasc.getDay();
    var nomeSemana = "";
    if (numSemana == 0) nomeSemana = "um domingo";
    else if (numSemana == 1) nomeSemana = "uma segunda-feira";
    else if (numSemana == 2) nomeSemana = "uma terça-feira";
    else if (numSemana == 3) nomeSemana = "uma quarta-feira";
    else if (numSemana == 4) nomeSemana = "uma quinta-feira";
    else if (numSemana == 5) nomeSemana = "uma sexta-feira";
    else if (numSemana == 6) nomeSemana = "um sábado";

    document.getElementById("resSemana").value = nomeSemana;

    // Cálculo exato da Idade
    var idade = hoje.getFullYear() - a_ani;
    var mesAtual = hoje.getMonth() + 1;
    var diaAtual = hoje.getDate();

    if (mesAtual < m_ani || (mesAtual == m_ani && diaAtual < d_ani)) {
        idade--;
    }

    document.getElementById("resIdade").value = idade;

  
    if (((d_ani >= 22) && (m_ani == 12)) || ((d_ani <= 20) && (m_ani == 1))) 
        document.images["signo"].src = "src/assets/img/capricornio.jpg";

    else if (((d_ani >= 21) && (m_ani == 1)) || ((d_ani <= 19) && (m_ani == 2))) 
        document.images["signo"].src = "src/assets/img/aquario.jpg";

    else if (((d_ani >= 20) && (m_ani == 2)) || ((d_ani <= 20) && (m_ani == 3))) 
        document.images["signo"].src = "src/assets/img/peixes.jpg";
    
    else if (((d_ani >= 21) && (m_ani == 3)) || ((d_ani <= 20) && (m_ani == 4))) 
        document.images["signo"].src = "src/assets/img/aries.jpg";

    else if (((d_ani >= 21) && (m_ani == 4)) || ((d_ani <= 20) && (m_ani == 5))) 
        document.images["signo"].src = "src/assets/img/touro.jpg";
    
    else if (((d_ani >= 21) && (m_ani == 5)) || ((d_ani <= 20) && (m_ani == 6))) 
        document.images["signo"].src = "src/assets/img/gemeos.jpg";
    
    else if (((d_ani >= 21) && (m_ani == 6)) || ((d_ani <= 22) && (m_ani == 7))) 
        document.images["signo"].src = "src/assets/img/cancer.jpg";

    else if (((d_ani >= 23) && (m_ani == 7)) || ((d_ani <= 22) && (m_ani == 8))) 
        document.images["signo"].src = "src/assets/img/leao.jpg";
    
    else if (((d_ani >= 23) && (m_ani == 8)) || ((d_ani <= 22) && (m_ani == 9))) 
        document.images["signo"].src = "src/assets/img/virgem.jpg";
    
    else if (((d_ani >= 23) && (m_ani == 9)) || ((d_ani <= 22) && (m_ani == 10))) 
        document.images["signo"].src = "src/assets/img/libra.jpg";
    
    else if (((d_ani >= 23) && (m_ani == 10)) || ((d_ani <= 21) && (m_ani == 11))) 
        document.images["signo"].src = "src/assets/img/escorpiao.jpg";
    
    else if (((d_ani >= 22) && (m_ani == 11)) || ((d_ani <= 21) && (m_ani == 12))) 
        document.images["signo"].src = "src/assets/img/sagitario.jpg";
}

function limpar() {
    document.images["signo"].src = "";
    document.getElementById("dia").focus();
}
