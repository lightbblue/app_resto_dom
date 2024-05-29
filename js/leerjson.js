let container = document.querySelector(".productos");
fetch("json/restaurantes.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        container.innerHTML+=/*html*/`
        <a href="./restaurante.html" class="card">
            <div class="card-img">
                <div class="img-cartita"><img src="${e.avatar.src}"></div>
                <div class="portadita2"></div>
                <h5>3 km</h5>
            </div>
            <div class="card-info">
                <div class="palabritas">
                    <h3>${e.name}</h3>
                    <h5>${e.direccion}</h5>
                    <h5>${e.horario}</h5>
                </div>
                <div class="iconitos">
                    <div class="estrellas">
                        <i class="icons f10 verde">star</i>
                        <i class="icons f10 verde">star</i>
                        <i class="icons f10 verde">star</i>
                        <i class="icons f10 verde">star</i>
                        <i class="icons f10">star</i>
                        (72)
                    </div>
                    <div class="euros">
                        <i class="icons f10 verde">euro</i>
                        <i class="icons f10 verde">euro</i>
                        <i class="icons f10">euro</i>
                    </div>
                </div>
            </div>
            <div class="rating"><h3>4.8</h3></div>
        </a>`
    });
})

// const getData = async () => {
//     const data = await fetch("json/restaurantes.json");
//     return (await data.json());
// };
// const data = await getData();


// async function getData(){
//     const data = 'json/restaurantes.json';
//     const response = await fetch(data);
//     return (await response.json());
// }
// const data = getData();