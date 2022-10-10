const $winner = document.querySelector("#winner"),
$players = document.querySelectorAll(".player")
const largo = $players.length


$winner.addEventListener("click", e=>{
    let random = Math.floor(Math.random() * ((largo - 1) +1))
    console.log(`El ganador es ${$players[random].innerHTML}`)
    alert(`El ganador es ${$players[random].innerHTML}`)
})