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

    var inputTitulo = document.querySelector("#titulo")
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

    inputTitulo.addEventListener("keypress", (e)=>{
        key(e.key)
    })

    /* Interactuando con formularios */
    /* Micro desafío - Paso 1 */

    inputTitulo.focus();

    var inputCalificacion = document.querySelector("#rating");
    var inputPremios = document.querySelector("#awards");
    var inputFecha = document.querySelector("#release_date");
    var inputDuracion = document.querySelector("#length");
    var inputGenero = document.querySelector("#genreID");

    console.log(inputCalificacion);
    console.log(inputFecha);

    
    var form = document.querySelector("form");
    var divErrores = document.createElement("div");
    var ulErrores = document.createElement("ul");

    form.appendChild(divErrores);
    divErrores.appendChild(ulErrores)

    /* Validacion en linea */
    /* Titulo */
    inputTitulo.addEventListener("input", e=>{
        if (inputTitulo.value.length < 3) {
            inputTitulo.classList.add("is-invalid")
            document.querySelector("#smallTitulo").innerHTML = "El título debe tener más de dos caracteres"
        }else {
            inputTitulo.classList.remove("is-invalid")
            inputTitulo.classList.add("is-valid")
            document.querySelector("#smallTitulo").innerHTML = ""
        }
    })

    /* Calificación */
    inputCalificacion.addEventListener("input", e=>{
        if (inputCalificacion.value < 0 || inputCalificacion.value >10) {
            inputCalificacion.classList.add("is-invalid")
            document.querySelector("#smallCalificacion").innerHTML = "El valor ingresado debe estar entre cero (0) y diez (10) <br>"
        }else {
            inputCalificacion.classList.remove("is-invalid")
            inputCalificacion.classList.add("is-valid")
            document.querySelector("#smallCalificacion").innerHTML = ""
        }
    })
    /* Premios */
    inputPremios.addEventListener("input", e=>{
        if (inputPremios.value < 0 || inputPremios.value >10) {
            inputPremios.classList.add("is-invalid")
            document.querySelector("#smallPremios").innerHTML = "El valor ingresado debe estar entre cero (0) y diez (10) <br>"
        }else {
            inputPremios.classList.remove("is-invalid")
            inputPremios.classList.add("is-valid")
            document.querySelector("#smallPremios").innerHTML = ""
        }
    })

    /* Fecha */
    inputFecha.addEventListener("input", e=>{
        if (Date.parse(inputFecha.value) > Date.now()) {
            inputFecha.classList.add("is-invalid")
            document.querySelector("#smallFecha").innerHTML = "La fecha ingresada no puede ser superior a la fecha actual <br>"
        }else {
            inputFecha.classList.remove("is-invalid")
            inputFecha.classList.add("is-valid")
            document.querySelector("#smallFecha").innerHTML = ""
        }
    })

    
    /* Duración */
    inputDuracion.addEventListener("input", e=>{
        if (inputDuracion.value < 60 || inputDuracion.value >360) {
            inputDuracion.classList.add("is-invalid")
            document.querySelector("#smallDuracion").innerHTML = "La duración debe ser un valor entre 60 y 360 minutos <br>"
        }else {
            inputDuracion.classList.remove("is-invalid")
            inputDuracion.classList.add("is-valid")
            document.querySelector("#smallDuracion").innerHTML = ""
        }
    })



    /* Validacion al enviar el formulario */
    formulario.addEventListener("submit", e =>{
        
        
        let errores = [];

        /* Titulo */
        if (inputTitulo.value === "") {
            errores.push("El campo título está vacío");
            inputTitulo.classList.add("is-invalid")
            
        }else{
            inputTitulo.classList.remove("is-invalid")
            inputTitulo.classList.add("is-valid")
        }

        /* Calificación */
        if (inputCalificacion.value === "") {
            errores.push("El campo calificación está vacío")
            inputCalificacion.classList.add("is-invalid")
            
        }else if(inputCalificacion.value < 0 || inputCalificacion.value >10){
            errores.push("El valor ingresado debe estar entre cero (0) y diez (10)")
            inputCalificacion.classList.add("is-invalid")
        }
        else{
            inputCalificacion.classList.remove("is-invalid")
            inputCalificacion.classList.add("is-valid")
        }

        /* Premios */    
        if (inputPremios.value === "") {
            errores.push("El campo premios está vacío")
            inputPremios.classList.add("is-invalid")
            
        }else if(inputPremios.value < 0 || inputPremios.value >10){
            errores.push("El valor ingresado debe estar entre cero (0) y diez (10)")
            inputPremios.classList.add("is-invalid")
        }else{
            inputPremios.classList.remove("is-invalid")
            inputPremios.classList.add("is-valid")
        }

        
        /* Fecha */
    
        if (inputFecha.value === "") {
            errores.push("El campo fecha de creación está vacío")
            inputFecha.classList.add("is-invalid")
            
        }else if(Date.parse(inputFecha.value) > Date.now()){
            errores.push("La fecha ingresada no puede ser superior a la fecha actual")
            inputFecha.classList.add("is-invalid")

        }else{
            inputFecha.classList.remove("is-invalid")
            inputFecha.classList.add("is-valid")
        }

        /* Duración */
        if (inputDuracion.value === "") {
            errores.push("El campo duración está vacío")
            inputDuracion.classList.add("is-invalid")
            
        }else if(inputDuracion.value < 60 || inputDuracion.value >360){
            errores.push("La duración debe ser un valor entre 60 y 360 minutos")
            inputDuracion.classList.add("is-invalid")
        }else{
            inputDuracion.classList.remove("is-invalid")
            inputDuracion.classList.add("is-valid")
        }

        if (inputGenero.value === "") {
            errores.push("El campo género está vacío")
            inputGenero.classList.add("is-invalid")
            
        }else{
            inputGenero.classList.remove("is-invalid")
            inputGenero.classList.add("is-valid")
        }

        if (errores.length > 0) {
            e.preventDefault();
            ulErrores.innerHTML = ""
            errores.forEach(e=>{
                ulErrores.innerHTML += "<li>"+e+ "</li>"

            })
            
        }


    })
    
    

    
}
