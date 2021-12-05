window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    /* Micro desafío - Paso 1 */

    var boton = document.querySelector(".botonAgregar");

    boton.addEventListener("mouseover", ()=>{
        boton.style.backgroundColor = "crimson"
    })

    boton.addEventListener("mouseout", ()=>{
        boton.style.backgroundColor = "green"
    })


}