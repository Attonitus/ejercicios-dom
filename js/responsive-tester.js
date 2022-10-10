const $enviar = document.querySelector("#submit"),
$cerrar = document.querySelector("#cerrar")

let ventana;

$enviar.addEventListener("click", e=>{
    e.preventDefault
    const $website = document.querySelector("#website").value,
    $ancho = document.querySelector("#ancho").value,
    $alto = document.querySelector("#alto").value
    ventana = window.open(`${$website}`,"_blank" ,`width=${$ancho}, height=${$alto}`)
})

$cerrar.addEventListener("click", e=> {
    ventana.close();
})