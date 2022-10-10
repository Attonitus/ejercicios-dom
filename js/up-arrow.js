const $upArrow = document.querySelector("#up-arrow")


window.addEventListener("scroll", e=> {
    if(window.scrollY < 600) {
        $upArrow.classList.remove("is-active")
    }
    else if(window.scrollY > 600) {
        $upArrow.classList.add("is-active")
    }
})


$upArrow.addEventListener("click", e => {
    window.scroll(0,0)
})