function calcular() {
    let campoA = document.getElementById("a").value;
    let campoB = document.getElementById("b").value;
    let campoC = document.getElementById("c").value;

    var delta1;

    if ((campoA == "") || (campoA == 0) || (isNaN(campoA))){
        alert("O valor de A não pode ser vazio, 0 ou caracter!");
        document.getElementById("a").value="";
        document.getElementById("a").focus();
        return;
    }
    else if((campoB == "") || (isNaN(campoB))){
        alert("O valor de B não pode ser vazio ou caracter!");
        document.getElementById("b").value="";
        document.getElementById("b").focus();
        return;
    }
     else if((campoC == "") || (isNaN(campoC))){
        alert("O valor de C não pode ser vazio ou caracter!");
        document.getElementById("c").value="";
        document.getElementById("c").focus();
        return;
    }
    else
    {
        campoA = parseFloat(campoA);
        campoB = parseFloat(campoB);
        campoC = parseFloat(campoC);
        delta1 = Math.pow(campoB, 2) - (4 * campoA * campoC);
        document.getElementById("delta").value = delta1;

        if (delta1 < 0) 
            {
                document.getElementById("r1").value="Não há raizes reais";
                document.getElementById("r2").value="Não há raizes reais";
            }
        else 
            {
                let x1 = ((-campoB + Math.sqrt(delta1)) / (2 * campoA)).toFixed(2);
                let x2 = ((-campoB - Math.sqrt(delta1)) / (2 * campoA)).toFixed(2);
                document.getElementById("r1").value = x1;
                document.getElementById("r2").value = x2;
            }
    }
}

function resetar() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("delta").value = "";
    document.getElementById("r1").value = "";
    document.getElementById("r2").value = "";
    document.getElementById("a").focus();
}


