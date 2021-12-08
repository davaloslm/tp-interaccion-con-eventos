# Interactuando con formularios
---
## Consignas 
--- 
### Micro desafío - Paso 1:

 - Deberemos tomar como punto de partida el archivo de JavaScript:
/views//moviesAdd.js, y debemos vincularlo con el archivo:
/public/js/moviesAddValidation.ejs.
 - Comprobar que el archivo quedo bien vinculado, para ello, desde el browser
debemos ejecutar: localhost:3001/movies/add
 - Apenas cargue el formulario, debemos posicionarnos o tener el foco en el campo
“Título de la película” de forma automática.
 - Todos los campos son obligatorios, ninguno puede estar vacío.
 - Si se trata de enviar el formulario (presionando el botón “Agregar”) estando todos o
algún campo vacío —o que no cumpla con los requerimientos—, no será posible
enviar el formulario; y a aquellos campos input o select con error se les deberá
agregar la clase “is-invalid” . Esta ya se encuentra creada en el archivo:
/public/css/style.css.
   -  Las validaciones no solo deberán hacerse al enviar el formulario si no
también al momento en el que el visitante interactúa con cada campo
(validación on-time).
 - De igual manera, aquellos campos que poseen error deberán tener un texto que
especifique el tipo de error. Dicho texto deberá estar presente en el elemento con
clase “is-invalid”. Esta ya se encuentra creada en el archivo: /public/css/style.css.
 - El formulario contará con validaciones especiales para los siguientes campos:
   - Calificación y Premios: deberá validar que el valor ingresado esté
comprendido entre cero (0) y diez (10).

   - Duración: deberá validar que el valor ingresado esté comprendido entre 60
y 360 minutos.

 - Si los campos cumplen con los requerimientos exigidos, debemos hacer lo
siguiente:

   - A todos los campos input o select se les deberá agregar la clase “is-valid”,
como constancia que ese campo pasó la validación. Esta ya se encuentra
creada en el archivo: /public/css/style.css.

--- 

### Micro desafío - Paso 2:

 - Si existen errores en el registro de la película, ya que el usuario no cumplió con los
requerimientos en los controles del formulario, entonces en la vista
/views//moviesAdd.js se le deben mostrar al usuario una lista con los errores. Para
ello se recomienda capturar en el archivo /public/js/moviesAddValidation.ejs el
elemento <ul class="errores"></ul>, ubicado en el archivo: /views//moviesAdd.js. Al
mismo se le deberá agregar la clase “alert-warning”. Esta ya se encuentra creada
en el archivo: /public/css/style.css.

 - Si todos los datos cumplen con los requerimientos exigidos, se le debe enviar al
usuario un mensaje indicando “La película se guardó satisfactoriamente”.