let container = document.querySelector(".container");
fetch("json/restaurantes.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        if(e.name==localStorage.getItem("nombre")){
            document.getElementById("tituloResto").innerHTML=e.name
            e.reviews.forEach(elem => {
                container.innerHTML+=/*html*/`
                <div href="./comida.html" class="card">
                    <div class="fotocontainer">
                        <img src=${elem.usr_img} class="foto">
                        <div class="precio">${elem.stars} <i class="icons">star</i></div>
                    </div>
                    <div class="info">
                        <div class="title">${elem.name}</div>
                        <h5>- ${elem.food}</h5>
                        <div class="desc">${elem.description}</div>
                    </div>
                </div>`
            })};
    });
})