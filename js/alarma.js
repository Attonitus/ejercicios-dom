const $audioAlarma = document.querySelector("#audioAlarma"),
$btnAlarma = document.querySelector("#btnAlarma"),
$btnAlarmaDetener = document.querySelector("#btnAlarmaDetener")

$audioAlarma.volume-=0.99
$btnAlarma.addEventListener("click", e => {
    $audioAlarma.play()
    $audioAlarma.loop = true
    $btnAlarma.disabled = true
})

$btnAlarmaDetener.addEventListener("click", e => {
    $audioAlarma.pause()
    $audioAlarma.currentTime = 0;
    $audioAlarma.loop = false
    $btnAlarma.disabled = false
})

