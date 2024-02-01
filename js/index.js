let entradaTexto = document.getElementById("entrada-texto");
let btnCriptografar = document.getElementById("btn-criptografar");
let btnDecriptografar = document.getElementById("btn-decriptografar");
let resultado = document.getElementById("resposta-resultado-texto");
let btnCopia = document.getElementById("btn-copiar");
document.getElementById("resposta-resultado-texto").style.display = "none";
document.getElementById("btn-copiar").style.display = "none";


function criptografar() {  
  let textoCriptografado = entradaTexto.value;
  let resultadoTexto = textoCriptografado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  resultado.value = resultadoTexto;

  document.getElementById("container-resultado-img-ativo").style.display = "none";  
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
  document.getElementById("resposta-resultado-texto").style.display = "show";
  document.getElementById("resposta-resultado-texto").style.display = "inherit";
}

btnCriptografar.onclick = criptografar;

function decriptografar() {  
  let textoDecriptografado = entradaTexto.value;
  let resultadoTexto = textoDecriptografado
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");
  resultado.value = resultadoTexto;

  document.getElementById("container-resultado-img-ativo").style.display = "none";  
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
  document.getElementById("resposta-resultado-texto").style.display = "show";
  document.getElementById("resposta-resultado-texto").style.display = "inherit";
}

btnDecriptografar.onclick = decriptografar;

function copy() {
  if (resultado.value !== "") {
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resultado.value);

    alert(resultado.value + " foi copiado!");
  }
}

btnCopia.onclick = copy;