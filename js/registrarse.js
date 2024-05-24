const form = document.getElementById("loginForm");
const user = document.getElementById("InputEmail");
const pass = document.getElementById("InputPassword");

// Expresión regular para validar un correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Expresión regular para validar contraseña
/*
Al menos 8 caracteres de longitud.
Al menos una letra mayúscula.
Al menos un carácter especial. 
Al meenos un numero del 0 al 9
*/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailRegex.test(user.value)) {
    alert("Por favor, introduce un correo electrónico válido");
  } else if (!passwordRegex.test(pass.value)) {
    alert(
      "La contraseña debe poseer minimo 8 caracteres, al menos una letra mayúscula, al menos un carácter especial y al menos un numero del 0 al 9"
    );
    return false;
  } else {
    console.log(user.value.trim());
    console.log(pass.value);
    alert("credenciales correctas");
  }
});
