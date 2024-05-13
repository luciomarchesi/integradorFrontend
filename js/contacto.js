const form = document.getElementById("loginForm")
const user = document.getElementById("InputEmail")
const numero = document.getElementById("numero")
const email = document.getElementById("InputEmail")


form.addEventListener("submit", e=> {
    e.preventDefault()

    const select = document.getElementById("miSelect")
    var opcion = select.value;

    if(user.value.length <6){
      alert("El nombre debe poseer al menos 6 caracteres")
    }
    if(numero.value.length <8){
      alert("El número debe poseer al menos 8 caracteres")
    }
    if(opcion == 0){
        alert("Ingrese una opción válida en el menú Género")
    }
})