document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    //event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    var loginUser = document.getElementById("loginUser").value;
    var loginPass = document.getElementById("loginPass").value;

    var datos = {
      name_user: loginUser,
      pass_user: loginPass,
    };

    console.log(datos);
    document.getElementById("loginForm").reset();

    // Convertir el objeto a una cadena JSON
    var datosString = JSON.stringify(datos);

    // Guardar en Local Storage
    localStorage.setItem("datosUsuario", datosString);

    console.log(localStorage.getItem("datosUsuario"));

    window.location.href = "index.html"; // Redirigir al usuario a login.html
  });
