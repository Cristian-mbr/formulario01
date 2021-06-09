// Variables

const btn = document.querySelector("#btn");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#correo");
const pass = document.querySelector("#pass");
const form = document.querySelector("#form");


// magia
eventListeners();
function eventListeners (){
    document.addEventListener("DOMContentLoaded", iniciarApp)

    nombre.addEventListener("blur", validarForm)
    email.addEventListener("blur", validarForm)
    pass.addEventListener("blur", validarForm)
}



// Funciones
function iniciarApp () {
     btn.disabled = true;
     btn.classList.add("cursor-not-allowed", "opacity-50")
}

function validarForm (e){
    if(e.target.value.length > 0){
        e.target.classList.add("border-green-300")
    }else{
        e.target.classList.add("border-red-300")

        mostrarError();
    }
}

function mostrarError (){
    const mError = document.createElement("P");
    mError.textContent = "dale pelotudo pone bien los campos"
    mError.classList.add("border", "border-red-500", "text-red-500", "p-3", "mt-2", "text-center", "error")
    
    const errores = document.querySelectorAll(".error")
    if(errores.length === 0){
        form.appendChild(mError);
    }

    
}