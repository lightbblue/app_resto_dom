let main = document.querySelector("main");
let cont = true;
let unit = 0;
fetch("json/restaurantes.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        if(e.name==localStorage.getItem("nombre")){
            cont = true;
            e.menu.forEach(elem => {
                if(elem.id==localStorage.getItem("platillo") && cont){
                    unit = elem.price
                    cont = false;
                    document.getElementById("titleResto").innerText=elem.name
                    document.getElementById("precioResto").innerText="$"+elem.price
                    main.querySelector(".texto").innerText=elem.description;
                }
            });
        };
    });
})

let cantidad = document.getElementById("cantidad") 
let btnrestar = document.getElementById("restar")
let btnsumar = document.getElementById("sumar")
let subtotal = document.getElementById("subtotal")
let precioUnit = document.querySelector(".precio")
let cant = 1
cantidad.innerText = cant
subtotal.innerText = `Total: $${unit*cant}`
btnrestar.innerText = "block"
btnrestar.style.color = "grey"
btnrestar.style.cursor = "unset"
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