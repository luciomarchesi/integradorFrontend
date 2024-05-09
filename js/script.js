const registo = document.getElementById("registro");
const user = JSON.parse(localStorage.getItem("user"));

console.log(user)
if(localStorage.getItem("user")){
    registo.innerHTML = user.email_user; 
    registo.href = "user.html";
}