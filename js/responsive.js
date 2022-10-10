const $video = document.querySelector("#responsive-video"),
$map = document.querySelector("#responsive-map")


const resizeElement = () =>{
    if(window.innerWidth < 650){
        $video.setAttribute('width', '250')
        $map.setAttribute('width', '250')
    }
    else if(window.innerWidth > 650){
        $video.setAttribute('width', '560')
        $map.setAttribute('width', '600')
    }
}


window.addEventListener("DOMContentLoaded", e => {
    resizeElement();
})

window.addEventListener("resize", e => {
    resizeElement();
})