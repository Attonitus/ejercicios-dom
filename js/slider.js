const $nextBtn = document.querySelector(".next"),
$prevBtn = document.querySelector(".prev"),
$slides = document.querySelectorAll(".slider-slide")

let i =0
$prevBtn.addEventListener("click", e =>{
        e.preventDefault();
        $slides[i].classList.remove("active")
        i--
        if(i<0){
            i = $slides.length - 1
        }
        $slides[i].classList.add("active")

})

$nextBtn.addEventListener("click", e =>{
    e.preventDefault();
    $slides[i].classList.remove("active")
    i++
    if(i >= $slides.length){
        i = 0
    }
    $slides[i].classList.add("active")

})


