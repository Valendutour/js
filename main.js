let name = document.getElementById("name");
let mail = document.getElementById("mail");
let celu = document.getElementById("celu");
let comment = document.getElementById("comment");
let send = document.getElementById("send");
let clear = document.getElementById("clear");

send.addEventListener("click",enviar);

function enviar(x){
    x.preventDefault();
    console.log("formulario enviado")
}