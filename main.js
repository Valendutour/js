const Usuario = function(nombre, mail, celu, comment) {
    this.nombre = nombre;
    this.mail = mail;
    this.celu = celu;
    this.comment = comment;
}
const arrayUsuarios = [];

const nombre = document.getElementById("inputNombre");
const mail = document.getElementById("inputEmail");
const celu = document.getElementById("inputTel");
const comment = document.getElementById("floatingTextarea2");
const send = document.getElementById("boton");

function guardar(event) {
    event.preventDefault();
    if (nombre.value.trim() !== "" && mail.value.includes("@") && !isNaN(celu.value) && comment.value.trim() !== "") {

        let usuario = new Usuario(nombre.value, mail.value, celu.value, comment.value);

        arrayUsuarios.push(usuario);
        localStorage.setItem("Usuarios",arrayUsuarios);


        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Formulario enviado"
          });
    } else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Complete todos los campos correctamente",
            showConfirmButton: false,
            timer: 2200
        });
    }
}
send.addEventListener("click", guardar);

