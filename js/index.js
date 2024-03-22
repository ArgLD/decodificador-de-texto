let entradaTexto = document.getElementById("entradaTexto");
let codificar = document.getElementById("btnCodifica");
let descodificar = document.getElementById("btnDescodifica");
let resultado = document.getElementById("saida");
let btnCopia = document.getElementById("copiar");

function criptografar() {    
  
    if (/\S/.test(entradaTexto.value)) {
      let textoCriptografado = entradaTexto.value;
      let resultadoTexto = textoCriptografado
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
      resultado.value = resultadoTexto;
    
      document.getElementById("ativo").style.display = "none";
      document.getElementById("texto1").style.display = "none";
      document.getElementById("texto2").style.display = "none";
      document.getElementById("copiar").style.display = "show";
      document.getElementById("copiar").style.display = "inherit";
      document.getElementById("saida").style.display = "show";
      document.getElementById("saida").style.display = "inherit";
    }
    else {
      window.location.reload()    
    }
}

codificar.onclick = criptografar;

function decriptografar() {  

  if (/\S/.test(entradaTexto.value)){
    let textoDescriptografado = entradaTexto.value;
    let resultadoTexto = textoDescriptografado
      .replace(/ufat/g, "u")
      .replace(/ober/g, "o")
      .replace(/ai/g, "a")
      .replace(/imes/g, "i")
      .replace(/enter/g, "e");
    resultado.value = resultadoTexto;
  
    document.getElementById("ativo").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("saida").style.display = "show";
    document.getElementById("saida").style.display = "inherit";
  }
  else {
    window.location.reload()    
  }
}

descodificar.onclick = decriptografar;

function copy() {
  if (resultado.value !== "") {
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resultado.value);

    alert(resultado.value + " copiado com sucesso!");
  }
}

btnCopia.onclick = copy;