// Si bien este metodo no sirve para Generalizar un encriptado, 
// lo elegi por encontrarlo mas prolijo para entenderlo

function encriptar() {
    var frase = document.getElementById("textoEncriptado").value;
    
    var textoEncriptado = frase.replace(/e/img,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    
    document.querySelector(".lateral").classList.add("ocultar");

}


function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value;
    
    var textoEncriptado = frase.replace(/enter/img,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    
}

async function copiar() {
    var contenido = document.getElementById("textoDesencriptado").value;
    try {
        await navigator.clipboard.writeText(contenido);
        console.log('Texto copiado con exito al portapapeles');
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
}
