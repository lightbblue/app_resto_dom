let container = document.querySelector(".container");
function guardar2(id) {
    localStorage.setItem("platillo",id)
}
fetch("json/restaurantes.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        if(e.name==localStorage.getItem("nombre")){
            document.getElementById("tituloResto").innerHTML=e.name
            e.menu.forEach(elem => {
                container.innerHTML+=/*html*/`
                <a id=${elem.id} href="./comida.html" class="card" onclick="guardar2(id)">
                    <div class="fotocontainer">
                        <img src="./img/diavolo-pasta-6c705f25988e2c773945c5fd250e748b6ab5d3f450c5c2c2111ca5216b31e501.png" class="foto">
                        <div class="precio">${elem.price}</div>
                    </div>
                    <div class="info">
                        <div class="title">${elem.name}</div>
                        <div class="desc">${elem.description}</div>
                    </div>
                </a>`
            })};
    });
})