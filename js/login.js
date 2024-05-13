document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

var user = document.getElementById("InputEmail").value;
var pass = document.getElementById("InputPassword").value;

var datos = {
  
  email_user: user,
  pass_user: pass
};

localStorage.setItem('user',JSON.stringify(datos))
console.log(localStorage.getItem('user'));
  // Redirigir al usuario a login.html
//window.location.href = "index.html";

}
)

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