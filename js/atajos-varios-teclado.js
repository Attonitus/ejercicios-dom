const $keyPlayer = document.querySelector("#key-player"),
$keyBackground = document.querySelector("#key-background")

document.addEventListener("keydown", e=>{

    if(e.key == 'ArrowDown'){
        e.preventDefault()
        if($keyPlayer.getBoundingClientRect().top >= 450){
            return
        }
        setTimeout(() =>{
            $keyPlayer.style.transform += 'translate(0,1.5rem)'
        },0)
    }
    else if(e.key == 'ArrowUp'){
        e.preventDefault()
        setTimeout(() =>{
            if($keyPlayer.getBoundingClientRect().top <= 120){
                return
            }
            $keyPlayer.style.transform += 'translate(0,-1.5rem)'
        },0)
    }
    else if(e.key == 'ArrowRight'){
        e.preventDefault()
        if($keyPlayer.getBoundingClientRect().right >= 1050){
            return
        }
        setTimeout(() =>{
            $keyPlayer.style.transform += 'translate(1.5rem,0)'
        },0)
    }
    else if(e.key == 'ArrowLeft'){
        e.preventDefault()
        if($keyPlayer.getBoundingClientRect().right <= 550){
            return
        }
        setTimeout(() =>{
            $keyPlayer.style.transform += 'translate(-1.5rem,0)'
        },0)
    }
    
})


// ArrowDown
// ArrowRight
// ArrowLeft
// ArrowUp