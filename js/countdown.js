let dateCris = new Date('Dec 25, 2022 00:00:00')
const mensaje = 'Feliz navidad 🎅',
$countDown = document.querySelector('#count-down')

let diferrence = dateCris.getTime();

let countDownTiempo = setInterval(() => {
    let now = new Date().getTime(),
    limitTime = dateCris - now,
    days = Math.floor(limitTime / (1000 * 60 * 60 *24)),
    hours = Math.floor(limitTime % (1000 * 60 * 60 *24) /(1000*60*60)),
    minutes = Math.floor(limitTime % (1000 * 60 * 60) /(1000*60)),
    seconds = Math.floor(limitTime % (1000 * 60) /(1000));
    $countDown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`
    if(limitTime < 0){
        clearInterval(countDownTiempo);
        $countDown.innerHTML = `<h3>${mensaje}</h3>`
    }
},1000)