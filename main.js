const esfera = document.querySelector('.esfera');


let fondo = document.querySelector('.background');
let stars = document.querySelector('.estrellas');
let cloud = document.querySelector('.nube');
let fondoesfera = document.querySelector('.fondoEsfera')
let luna = document.querySelector('.luna')

esfera.addEventListener('click', ()=>{
    fondo.classList.toggle("black");
    stars.classList.toggle("newstar");
    cloud.classList.toggle("abajo");
    fondoesfera.classList.toggle("right");
    luna.classList.toggle("center");
})