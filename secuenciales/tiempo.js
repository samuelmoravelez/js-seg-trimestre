
let horas = Number(prompt("Ingresa la cantidad de horas:"));
let minutos = Number(prompt("Ingresa la cantidad de minutos:"));
let segundos = Number(prompt("Ingresa la cantidad de segundos:"));


let horasEnSegundos = horas * 3600; 


let minutosEnSegundos = minutos * 60; 


let totalSegundos = horasEnSegundos + minutosEnSegundos + segundos;


console.log("El tiempo ingresado equivale a un total de: " + totalSegundos + " segundos.");