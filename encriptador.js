const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
//definir una variable const o sea que no puede ser reasignada, con text area y mensaje 

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}
//

function encriptar(stringEncriptada){

    let matrizCodigo =[["e ", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }


    }
    return stringEncriptada
/* aca con let lo que se hace es las letras definidas, o sea a, e, i , o, u sean cambiandas por otros valores, o sea la a pasaria de ser a a ai, la i a imes. Y posteriormente 
se utiliza tolowercase que es para pasar las letras a miniscula y despues se usa un ciclo que en el valor cero, pase al valor uno, o sea que la i (valor cero) pase a imes (valor uno)*/
    

}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }


    }
    return stringDesencriptada
/*Aca es practicamente lo mismo que en el anterior, este es el boton de desencriptar, o sea hace lo mismo pero al revez, pasa las letras del valor uno al valor cero.
 si e (valor cero) esta en enter (valor uno), pues pase de valor uno a cero */ 
    
}
//Función copiar
function copiar() {
  // Obtener el texto del campo de texto 
  var copyText = document.querySelector(".mensaje");

  // Seleccionar el campo de texto
  copyText.select();
  copyText.setSelectionRange(0, 99999); // Para dispositivos moviles

   //Copiar el texto dentro del campo de texto
  navigator.clipboard.writeText(copyText.value);
  

  //Alerta de que el texto se ha copiado
  alert("Se ha copiado el texto: " + copyText.value);
}