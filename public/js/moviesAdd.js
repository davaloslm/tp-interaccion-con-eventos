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

    /* Micro desafío - Paso 2 */

    var input = document.querySelector("#titulo")
    var estadoSecreto = 0;

    var key = (key) =>{
        switch (true) {
            case estadoSecreto === 0 && key.toLowerCase() === "s":
                estadoSecreto++
                break;
            case estadoSecreto === 1 && key.toLowerCase() === "e":
                estadoSecreto++
                break;
            case estadoSecreto === 2 && key.toLowerCase() === "c":
                estadoSecreto++
                break;
            case estadoSecreto === 3 && key.toLowerCase() === "r":
                estadoSecreto++
                break;
            case estadoSecreto === 4 && key.toLowerCase() === "e":
                estadoSecreto++
                break;
            case estadoSecreto === 5 && key.toLowerCase() === "t":
                estadoSecreto++
                break;
            case estadoSecreto === 6 && key.toLowerCase() === "o":
                alert("SECRETO MÁGICO")
                estadoSecreto = 0
                break;
        
            default:
                estadoSecreto = 0
                break;
        }
    }

    input.addEventListener("keypress", (e)=>{
        key(e.key)
    })

        

   
    

    
}