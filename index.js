const iconeMenu = document.querySelector("#icone-menu"),
    menu = document.querySelector('#menu');

iconeMenu.addEventListener('click', (e) => {
    // addEventListener;ternamos estilos para el menu  y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    document.querySelector('#box-text').classList.toggle('opacity');
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == './assets/open-menu.png'){
        e.target.setAttribute('src', './assets/open-menu2.png')
    }else{
        e.target.setAttribute('src', './assets/open-menu.png')
    }
})