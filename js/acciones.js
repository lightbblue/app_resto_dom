let cantidad = document.getElementById("cantidad") 
let btnrestar = document.getElementById("restar")
let btnsumar = document.getElementById("sumar")
let subtotal = document.getElementById("subtotal")
let precioUnit = document.querySelector(".precio")
let unit = 1890
precioUnit.innerText = `$${unit}`
let cant = 1
cantidad.innerText = cant
subtotal.innerText = `Total: $${unit*cant}`
btnrestar.innerText = "block"
btnrestar.style.color = "grey"
btnrestar.style.curso = "unset"
function restar(){
    if(cant>1){
        cant = cant - 1
        cantidad.innerText = cant
        btnrestar.innerText = "remove"
        btnrestar.style.color = "black"
        btnsumar.innerText = "add"
        btnsumar.style.color = "black"
    }
    if(cant===1){
        btnrestar.innerText = "block"
        btnrestar.style.color = "gray"
    }
    subtotal.innerText = `Total: $${unit*cant}`
}
function sumar(){
    if(cant<4){
        cant = cant + 1
        cantidad.innerText = cant
        btnsumar.innerText = "add"
        btnsumar.style.color = "black"
        btnrestar.innerText = "remove"
        btnrestar.style.color = "black"
    }
    if(cant===4){
        btnsumar.innerText = "block"
        btnsumar.style.color = "gray"
    }
    subtotal.innerText = `Total: $${unit*cant}`
}
