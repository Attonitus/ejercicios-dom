const $filter = document.querySelector("#filter"),
$titles = document.querySelectorAll(".title"),
$cards = document.querySelectorAll(".card")

let buscado
let elementoChico
$filter.addEventListener("keyup", e=>{
    let contador=0
    buscado = $filter.value
    $titles.forEach(e =>{
        elementoChico = e.innerHTML.toLowerCase()
        contador++
       if(elementoChico.includes(buscado.toLowerCase())){
        $cards[contador-1].classList.remove("filter")
       }
       else{
        $cards[contador-1].classList.add("filter")
       }
    })
})
