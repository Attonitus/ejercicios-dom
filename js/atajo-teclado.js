document.addEventListener("keydown", e => {
    if(e.altKey && e.key == 'a'){
        alert("hola soy una alerta")
    }
    else if(e.altKey && e.key == 'c'){
        confirm("hola soy una confirmacion")
    }
    else if(e.altKey && e.key == 'p'){
        prompt("hola soy una aviso")
    }

})

