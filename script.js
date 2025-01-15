function Menu() {
    let menuMobile = document.querySelector('.menu_mobile');

    if(menuMobile.classList.contains('abrirMenu')){
        menuMobile.classList.remove('abrirMenu');
        document.querySelector('.icone').src = "img/Menu.png"
    }

    else{
        menuMobile.classList.add('abrirMenu');
        document.querySelector('.icone').src = "img/MenuX.png"
    }
}