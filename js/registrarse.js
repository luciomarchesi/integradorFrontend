const form = document.getElementById("loginForm")
const user = document.getElementById("InputEmail")
const pass = document.getElementById("InputPassword")

form.addEventListener("submit", e=> {
    e.preventDefault()
    if(user.value.length <6){
      alert("El nombre debe poseer al menos 6 caracteres")
    }
    if(pass.value.length <8){
      alert("La contraseña debe poseer al menos 8 caracteres")
    }
})