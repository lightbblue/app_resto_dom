let container2 = document.querySelector(".productos");
fetch("json/restaurantes.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        container2.innerHTML+=/*html*/`
        <a href="./restaurante.html" class="card">
            <div class="card-img">
                <div class="img-cartita"><img src="${e.avatar.src}"></div>
                <h5>${e.distance}</h5>
            </div>
            <div class="card-info">
                <div class="palabritas">
                    <h3>${e.name}</h3>
                    <h5>${e.location}</h5>
                    <h5>${e.open} - ${e.close}</h5>
                </div>
                <div class="iconitos">
                    <div class="estrellas">
                        ${`<i class="icons f10 verde">star</i>`.repeat(e.stars)}
                        ${`<i class="icons f10">star</i>`.repeat(5-e.stars)}
                        (${e.stars})
                    </div>
                    <div class="euros">
                         ${`<i class="icons f10 verde">euro</i>`.repeat(e.price)}
                         ${`<i class="icons f10">euro</i>`.repeat(3-e.price)}
                    </div>
                </div>
            </div>
            <div class="rating"><h3>${e.rating}</h3></div>
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