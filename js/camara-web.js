const $webcam = document.getElementById("webcam")

if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices
    .getUserMedia({video:true, audio:false})
    .then((stream) => {
        console.log(stream);
        $webcam.srcObject = stream
        $webcam.play()
    })
    .catch(err =>{
        $webcam.insertAdjacentHTML("beforebegin",`<p><mark>${err}</mark></p>`)
        console.log(`Sucedió el siguiente error ${err}`)
    })
}