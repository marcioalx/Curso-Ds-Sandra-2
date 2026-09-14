function calcula(op)
{
    let resu=0;
    let n1=document.getElementById("num1").value;
    let n2=document.getElementById("num2").value;
    if (isNaN(n1))
    {
        alert("zé Ruela, o 1° valor pode não ser caracter");
        document.getElementById("num1").value="";
        document.getElementById("num1").focus();
    }
    else if (isNaN(n2))
    {
        alert("zé Ruela, o 2° valor pode não ser caracter");
        document.getElementById("num2").value="";
        document.getElementById("num2").focus();
    }
    else
    {
        n1=parseFloat(n1);
        n2=parseFloat(n2);
        if (op=="+")
            resu=n1+n2;
        else if (op=="-")
            resu=n1-n2;
        else if (op=="x")
            resu=n1*n2;
        else if(n2!=0)
            resu=n1/n2;
        else
        {
            alert("Dvisão po zero!");
            document.getElementById("num2").value="";
            document.getElementById("num2").focus();
            return;
        }
        document.getElementById("txtresu").value=resu.toFixed(2);

    }
}


    function limpar()
    {
        document.getElementById("num1").focus();

    }
