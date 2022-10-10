const $btnHam = document.getElementById("hamburger"),
$span = document.getElementById("icon"),
$nav = document.querySelector(".nav")

$btnHam.addEventListener("click", e=>{
    if($nav.classList.contains("is-active")){
        $nav.classList.remove("is-active")
        $span.innerHTML = "menu"
    }
    else{
        $span.innerHTML = "close"
        $nav.classList.add("is-active")
    }
})

