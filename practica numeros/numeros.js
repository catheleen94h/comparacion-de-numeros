
/* solicitud de numeros */
let num1 = Number(prompt('ingrese el primer número'));
let num2 = Number(prompt('ingrese el segundo número'));
let num3 = Number(prompt('ingrese el tercer número'));

let mayor = Math.max(num1,num2,num3);
let menor = Math.min(num1,num2,num3);
let medio = (num1+num2+num3)-mayor-menor;

// 1. Insertar los números ingresados en el HTML
document.getElementById('numero1').textContent = `Número 1: ${num1}`;
document.getElementById('numero2').textContent = `Número 2: ${num2}`;
document.getElementById('numero3').textContent = `Número 3: ${num3}`;




if ((num1==num2)&&(num2==num3)){ 
    
    
    document.getElementById('N-mayor1').textContent = ``;
    document.getElementById('N-centro1').textContent =``;
    document.getElementById('N-menor1').textContent = ``;
    document.getElementById('N-menor2').textContent = ``;
    document.getElementById('N-centro2').textContent =``;
    document.getElementById('N-mayor2').textContent = ``;
    document.getElementById('t2').textContent = `LOS NÚMEROS SON IGUALES`;
    document.getElementById('t3').textContent = ``;
   
    // muestro por consola
    
    console.log(`Los números ingresados son iguales`);

}else{
    // 1. Insertar los números ingresados en el HTML mayor a menor
    document.getElementById('N-mayor1').textContent = `Mayor: ${mayor}`;
    document.getElementById('N-centro1').textContent =`Medio: ${medio}`;
    document.getElementById('N-menor1').textContent = `Menor: ${menor}`;


      // 1. Insertar los números ingresados en el HTML menor a mayor
    document.getElementById('N-menor2').textContent = `Menor: ${menor}`;
    document.getElementById('N-centro2').textContent =`Medio: ${medio}`;
    document.getElementById('N-mayor2').textContent = `Mayor: ${mayor}`;
    // muestro por consola
    console.log(`Números organizados de mayor a menor: ${mayor}, ${medio}, ${menor} `);
    console.log(`Números organizados de menor a mayor: ${menor}, ${medio}, ${mayor} `);
    }


