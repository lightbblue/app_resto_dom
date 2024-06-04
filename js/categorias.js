let container = document.querySelector(".categorias");
fetch("json/categorias.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        container.innerHTML+=/*html*/`
        <a href="#" class="btn-cat">
            <i class="icons f26">${e.icon}</i>
            <b>${e.desc}</b>
        </a>`
    });
})