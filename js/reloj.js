const $espacioReloj = document.querySelector("#espacio-reloj"),
$btnReloj = document.querySelector("#btnReloj"),
$btnRelojDetener = document.querySelector("#btnRelojDetener")

let intervalo

$btnReloj.addEventListener("click", e =>{
    $btnReloj.disabled = true
    intervalo = setInterval(() => {
        let hora = (new Date().toLocaleTimeString());
        $espacioReloj.innerHTML = hora
    }, 1000)
})

$btnRelojDetener.addEventListener("click", e=>{
    clearInterval(intervalo)
    $espacioReloj.innerHTML = ''
    $btnReloj.disabled = false
})