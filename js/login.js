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
