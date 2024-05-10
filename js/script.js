//const registo = document.getElementById("registro");
const user = JSON.parse(localStorage.getItem("user"));
const lista = document.getElementById("miLista");
const nuevoElemento = document.createElement("li");
const nuevobtn = document.createElement("button");
var nuevoEnlace = document.createElement("a");
nuevoEnlace.setAttribute("href", "./pages/user.html");

console.log(user);
if (localStorage.getItem("user")) {
  // registo.innerHTML = user.email_user;
  // registo.href = "user.html";
  nuevoEnlace.textContent = user.email_user;
  nuevoElemento.appendChild(nuevoEnlace);
  nuevoElemento.classList.add("--bs-primary-text-emphasis");
  nuevoElemento.classList.add("nav-item");
  nuevoElemento.classList.add("nav-link");
  nuevoElemento.classList.add("mx-2");
  lista.appendChild(nuevoElemento);
}
