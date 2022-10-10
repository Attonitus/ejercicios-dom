const $light = document.querySelector("#light"),
$modeSwitch = document.querySelector("#mode-switch")

const lightMode = () => {
    document.body.classList.remove("dark")
    $modeSwitch.innerHTML = "dark_mode"
    localStorage.setItem("theme", "light")
}
const darkMode = () => {
    document.body.classList.add("dark")
    $modeSwitch.innerHTML = "light_mode"
    localStorage.setItem("theme", "dark")
}

$light.addEventListener("click", e=> {
    if(document.body.classList.contains("dark")){
        lightMode();
    }
    else {
        darkMode();
    }
})

document.addEventListener("DOMContentLoaded", e => {
    console.log(localStorage.getItem("theme"))
    if(localStorage.getItem("theme") === null) localStorage.setItem("theme", "light")
    if(localStorage.getItem("theme") === "light") lightMode();
    if(localStorage.getItem("theme") === "dark") darkMode();
})