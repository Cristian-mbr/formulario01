// Variables

const btn = document.querySelector("#btn");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#correo");
const pass = document.querySelector("#pass");
const form = document.querySelector("#form");

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// magia
eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", iniciarApp)

    nombre.addEventListener("blur", validarForm);
    email.addEventListener("blur", validarForm);
    pass.addEventListener("blur", validarForm);

    form.addEventListener("submit", enviarEmail);
}



// Funciones
function iniciarApp() {
    btn.disabled = true;
    btn.classList.add("cursor-not-allowed", "opacity-50")
}

function validarForm(e) {
    if (e.target.value.length > 0) {

        // elimina los errores
        const error = document.querySelector("p.error");
        if (error) {
            error.remove();
        }



        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");



    } else {
        e.target.classList.remove("border", "border-green-500");
        e.target.classList.add("border", "border-red-500");

        mostrarError("Todos los campos son obligatorios");
    }

    if (e.target.type === "email") {
        if (er.test(e.target.value)) {
            const error = document.querySelector("p.error");
            if (error) {
                error.remove();
            }

            e.target.classList.remove("border", "border-red-500");
            e.target.classList.add("border", "border-green-500");

        } else {
            e.target.classList.remove("border", "border-green-500");
            e.target.classList.add("border", "border-red-500");
            mostrarError("Email no válido");
        }

    }

    if (nombre.value !== "" && er.test(email.value) && pass.value !== "") {
        btn.disabled = false;
        btn.classList.remove("cursor-not-allowed", "opacity-50")
        btn.classList.add("cursor-pointer", "hover:bg-purple-700")
    } else {
        btn.classList.remove("cursor-pointer", "hover:bg-purple-700")
        btn.disabled = true;
        btn.classList.add("cursor-not-allowed", "opacity-50")

    }

}






function mostrarError(mensaje) {
    const mError = document.createElement("P");
    mError.textContent = mensaje;
    mError.classList.add("border", "border-red-500", "text-red-500", "p-3", "mt-2", "text-center", "error")

    const errores = document.querySelectorAll(".error")
    if (errores.length === 0) {
        form.appendChild(mError);
    }


}


function enviarEmail(e) {
    e.preventDefault();


    // Mostrar el spinner
    const spinner = document.querySelector("#spinner-2");
    spinner.style.display = "flex";


    // Se oculta desp de 3 seconds

    setTimeout(() => {
        spinner.style.display = "none"

        // Mensaje q dice q esta perfect

        const parrafo = document.createElement("P")
        parrafo.textContent = "El formulario se envio correctamente"
        parrafo.classList.add("text-center", "my-10", "p-2", "bg-green-500", "text-white", "font-bold", "uppercase")

        // Insertar el parrafo antes del spinner
        form.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();

            resetearForm();
        }, 5000)

    }, 3000)
}

function resetearForm() {
    form.reset();

    iniciarApp();
}