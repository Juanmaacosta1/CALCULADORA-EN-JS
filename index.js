const txtop1 = document.getElementById("op1");
const txtoperacion = document.getElementById("operacion");
const txtop2 = document.getElementById("op2");
const btncalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

btncalcular.addEventListener('click',calcular);

//funcion para usar el boton calcular 
function calcular () {
    //verifico que el usuario me mande  los operadores +,- y no ingrese otra cosa
 const operacion = txtoperacion.value;
 const op1 =parseFloat (txtop1.value);
 const op2 =parseFloat (txtop2.value);

    if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/" || !isNaN(op1) && !isNaN(op2) ) {
    //ahora calculo
    let resultado;
    switch (operacion) {
        case "+":
            resultado= op1+op2;
            break;
        case "-":
            resultado= op1-op2;
            break;
        case "*":
            resultado= op1*op2;
            break;
            //en caso que el usuario quiera dividir por 0
        case "/":
            if (op2 === 0) {
                pResultado.innerText = "No se puede dividir por cero !";
                return;
            }
            resultado = op1 / op2;
            break;
    }
    pResultado.innerText = "="+ resultado;
 }else{
    pResultado.innerText = "calculo Imposible";
 }
} 