let main = document.querySelector("main");
let cont = true;
fetch("json/restaurantes.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        if(e.name==localStorage.getItem("nombre")){
            e.menu.forEach(elem => {
                if(elem.name==localStorage.getItem("platillo") && cont){
                    cont = false;
                    document.getElementById("titleResto").innerHTML=elem.name
                    document.getElementById("precioResto").innerHTML=elem.price
                    main.innerHTML+=/*html*/`
                    <div class="texto">
                        ${elem.description}
                    </div>
                    <input type="text" placeholder="Add a note (extra sauce, no onions, etc.)">
                    <section>
                        <div class="flex">
                            <div class="flex">
                                <button id="restar" class="icons botonCarrito" onclick="restar()">remove</button>
                                <p class="botonCarrito" id="cantidad">0</p>
                                <button id="sumar" class="icons botonCarrito" onclick="sumar()">add</button>
                            </div>
                
                            <button class="btnAgregar"><i class="iconos"></i>ADD TO CART</button>
                        </div>
                        <span id="subtotal"></span>
                        <!-- <div class="cantidad">- 2 +</div>
                        <div class="agregar">ADD TO CART</div> -->
                    </section>`
                }
            });
        };
    });
})
