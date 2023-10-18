const nombre = document.getElementById("inputNombre");
const mail = document.getElementById("inputEmail");
const celu = document.getElementById("inputTel");
const comment = document.getElementById("floatingTextarea2");
const send = document.getElementById("boton");
const clear = document.getElementById("clear");

function guardar(){
    if (nombre.value.trim() !== "" && mail.value.includes("@") && !isNaN(celu.value) && comment.value.trim() !== "") {

    const jsonNombre = JSON.stringify(nombre.value)
    const jsonMail = JSON.stringify(mail.value)
    const jsonCelu = JSON.stringify(celu.value)
    const jsonComment = JSON.stringify(comment.value)

    localStorage.setItem('name',jsonNombre)
    localStorage.setItem("mail",jsonMail)
    localStorage.setItem('celu',jsonCelu)
    localStorage.setItem('comment',jsonComment)

    console.log(typeof nombre)
    console.log(typeof jsonNombre)

    }else {
        alert("Por favor, complete todos los campos correctamente.");
    }
}

send.addEventListener("click",guardar)


/*
if("name"==="" || "mail"==="" || isNaN(celu)){
 que aparezca cartel que diga rellena todos los campos
<div id="ventanaModal" class="modal">
 <div class="modal-contenido">
     <span class="cerrar" id="cerrarModal">&times;</span>
     <h2>Producto Agregado</h2>
     <p>Se ha agregado un nuevo producto a la lista.</p>
 </div>
</div>
}

<!--start link a pag 404 error href="./404.html" (estaba puesto en el boton enviar)end-->

send.addEventListener("click",enviar);

function enviar(x){
    x.preventDefault();
    console.log("formulario enviado")
}
*/