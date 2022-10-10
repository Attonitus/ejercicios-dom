
window.addEventListener("online", e => console.log(navigator.onLine))
window.addEventListener("offline", e => console.log(navigator.onLine))

// const $connection = document.querySelector("#connection"),
// $con = document.querySelector("#con")

// $connection.addEventListener("click", e => {
//     if(navigator.onLine){
//         console.log("Está online")
//         $con.classList.add("conection")
//         $con.innerHTML = 'Conexión reestablecida'
//         $con.classList.remove("is-offline")
//     }
//     else {
//         console.log("Está offline")
//         $con.classList.add("is-offline")
//         $con.innerHTML = 'Conexión perdida'
//     }

// })
