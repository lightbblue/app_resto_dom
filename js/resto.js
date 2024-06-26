let main = document.querySelector("main");
fetch("json/restaurantes.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        if(e.name==localStorage.getItem("nombre")){
            main.innerHTML+=/*html*/`
            <div class="rating">${e.rating}</div>
            <div class="titulo">
                <div class="texto">
                    <div class="nombre">${e.name}</div>
                    <div class="lugar">${e.location}</div>
                </div>
                <div class="precio">
                    ${`<i class="icons f10 verde">euro</i>`.repeat(e.price)}
                    ${`<i class="icons f10">euro</i>`.repeat(3-e.price)}
                </div>
            </div>
            <div class="iconos">
                <div class="item">
                    <div class="dibu1 icons">schedule</div>
                    <div class="text">${e.open}-${e.close}</div>
                </div>
                <div class="item">
                    <div class="dibu2 icons">location_on</div>
                    <div class="text">${e.distance}</div>
                </div>
                <div class="item">
                    <div class="dibu3 icons">fastfood</div>
                    <div class="text">DELIVERY</div>
                </div>
            </div>
            <div class="info">
                ${e.description}
            </div>`};
    });
})