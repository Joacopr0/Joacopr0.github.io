function trabajo1() {

    let horas = prompt("Ingrese un Numero en Horas, y se dira su cantidad de Minutos y Segundos (ej: 1, 1.5, 2 horas)");
    let minutos = horas * 60;
    let segundos = horas * 3600;
    alert("En " + horas + " Horas hay:\n -" + minutos + " Minutos.\n -" + segundos + " Segundos.");

}

function trabajo2() {

    let radio =  prompt(" Ingrese un Numero del Radio, y se calculara su Area y Longitud:");
    let area = 3.14159 * (radio * radio);
    let Longitud = 2 * 3.14149 * radio; 
    alert("En base al Radio " + radio + "\n Area: " + area + " .\n Longitud: " + Longitud + " .");

}

function trabajo3() {

    let hombres = parseInt(prompt("Ingrese la cantidad de Hombres del Curso"));
    let mujeres = parseInt(prompt("Ingrese la cantidad de Mujeres del Curso"));
    let total = hombres + mujeres;
    porhom = (hombres / total) * 100;
    pormuj = (mujeres / total) * 100;
    alert("El porcentaje de Hombres es del " + porhom + "%, y el de Mujeres del " + pormuj + "%"); 

}

function trabajo4() {

    let cantestA = parseInt(prompt("Ingrese la cantidad de cuestionarios A"));
    let cantestB = parseInt(prompt("Ingrese la cantidad de cuestionarios B"));
    let cantestC = parseInt(prompt("Ingrese la cantidad de cuestionarios C"));
    cantestA *= 5;
    cantestB *= 8;
    cantestC *= 6;
    let totaltest = cantestA + cantestB + cantestC;
    let horas = totaltest / 60;
    let minutos = totaltest % 60;
    alert("El Tiempo para la Correcion de examenes es de " + horas + " Horas y " + minutos + " Minutos." );

}

function trabajo5() {

    let costo = prompt("Ingrese el Costo de su compra, y se le agregara un 15% de descuento:");
    costofinal = costo - (costo * 0.15);    
    alert("El Costo Final es de: $" + costofinal);

}

function trabajo6() {

    let numero = parseInt(prompt("Ingrese un Numero y se dira si es Par o Impar"));
    if (numero % 2 == 0) {
        alert("El Numero " + numero + " es Par");
    } else {
        alert("El Numero " + numero + " es Impar"); 
    }

}

function trabajo7() {

    alert("Ingrese las 3 notas Trimestrales,para saber si aprobo la Materia");
    let nota1 = parseInt(prompt("Ingrese la Nota del Primer Trimestre:"));
    let nota2 = parseInt(prompt("Ingrese la Nota del Segundo Trimestre:"));
    let nota3 = parseInt(prompt("Ingrese la Nota del Tercer Trimestre:"));
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio > 6) {
        alert(" Aprobaste la Materia.");
    } else {
        alert("Desaprobaste la Materia. :(");
    }

}

function trabajo8() {

    let monto = parseInt(prompt("Ingrese el Monto a Pagar:"));
        
    if (monto > 100) {
        monto = monto * 0.80;
        alert("El Monto Total es $" + monto + ", con un 20% de descuento. Adioss");
    } else {
        alert("El Monto Total es $" + monto + ", Adioss");    
    }

}

function trabajo9() {

    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let resultado;

    if (num1 === num2) {
        resultado = num1 * num2;
    } else if (num1 > num2) {
        resultado = num1 - num2;
    } else {
        resultado = num1 + num2;    
    }

    alert("El resultado es: " + resultado);

}

function trabajo10() {

    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let num3 = parseInt(prompt("Ingresa el tercer número:"));
    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }

    alert("El número mayor es: " + mayor);

}

function trabajo11() {
    let kilos = parseInt(prompt("Ingresa el número de kilos de mandarinas:"));
    let precioPorKilo = 2000; 
    let total = kilos * precioPorKilo;
    let descuento = 0;

    if (kilos >= 0 && kilos <= 2) {
        descuento = 0;
    } else if (kilos > 2 && kilos <= 5) {
        descuento = 0.10;
    } else if (kilos > 5 && kilos <= 10) {
        descuento = 0.15;
    } else {
        descuento = 0.20;
    }

    total -= total * descuento;
    alert("El total a pagar es: $" + total.toFixed(2));

}

function trabajo12() {

    let opcion;
    do {
        opcion = parseInt(prompt("Selecciona una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. Salir"));
    
        if (opcion >= 1 && opcion <= 3) {
            let num1 = parseFloat(prompt("Ingresa el primer número:"));
            let num2 = parseFloat(prompt("Ingresa el segundo número:"));
            let resultado;

            if (opcion === 1) {
                resultado = num1 + num2;
                alert("La suma es: " + resultado);
            } else if (opcion === 2) {
                resultado = num1 - num2;
                alert("La resta es: " + resultado);
            } else if (opcion === 3) {
                resultado = num1 * num2;
                alert("La multiplicación es: " + resultado);
            }
        } else if (opcion === 4) {
            alert("Saliendo del programa..");
        } else {
            alert("Opción no válida, intenta de nuevo.");
        }
    } while (opcion !== 4);

}


function trabajo13() {

    let N = parseInt(prompt("Ingresa un numero:"));
    let suma = 0;

    for (let i = 1; i <= N; i++) {
        suma += i;
    }

    alert("La suma de los primeros " + N + " números es: " + suma);

}


function trabajo14() {

    const correctpass = "1234"; 
    let pass;

    do {
      pass = parseInt(prompt("Ingresa la contraseña:"));
    } while (pass != correctpass);

    alert("Contraseña correcta.");


}

function trabajo15() {

    let suma = 0;
    let numero;

    while (true) {
        numero = parseInt(prompt("Ingrese un número para sumarlos (Ingrese 0 para Terminar):"));
        if (numero === 0) break;
        suma += numero;
    }

    alert("La suma total es: " + suma);

}

function trabajo16() {

    let opcion;

    do {
        opcion = prompt("Menú de opciones:\n1. Ñoquis\n2. Asado\n3. Salir\nElige una opción:");

        switch (opcion) {
        case '1':
            alert("Ñoquis.");
          break;
        case '2':
            alert("Asado.");
          break;
        case '3':
            alert("Saliendo del bucle...");
          break;
        default:
            alert("Gato o Pesho?");
          break;
        }

    } while (opcion !== '3');

}

function trabajo17() {

    let numero = 2;

    while (numero <= 50) {
        alert(numero);
        numero += 2;
    }

}
