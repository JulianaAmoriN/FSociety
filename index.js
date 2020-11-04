import cipher from './cipher.js';

let capturando1 = "";
let capturando11 = "";
let numero1 = "";
const botao1 = document.getElementById("send1")
botao1.addEventListener("click",capturar1)
//addEventListener fica esperando o evento acontecer, observador

let capturando2 = "";
let capturando22 = "";
let numero2 ="";
const botao2 = document.getElementById("send2")
botao2.addEventListener("click",capturar2)

function capturar1 (event) {
    event.preventDefault()
    //event.preventDefault impede que a pagina regarregue quando apertar o botão
    numero1 = document.getElementById("scret1").value;
    const numero11 = parseInt(numero1);
    //parseInt transforma minha string em numero

    capturando1 = document.getElementById('message1').value;
    capturando11 = capturando1.toUpperCase()
    //toUpperCase faz a letra ficar maiuscula 

    document.getElementById('answer1').innerHTML = cipher.encode(numero11,capturando11);
    //o innerHTML define ou retorna o conteúdo HTML

}

function capturar2 (event) {
    event.preventDefault()
    numero2 =document.getElementById("scret2").value;
    const numero22 = parseInt(numero2);

    capturando2 = document.getElementById('message2').value;
    capturando22 = capturando2.toUpperCase()
   
    document.getElementById('answer2').innerHTML = cipher.decode(numero22,capturando22);
    
}
