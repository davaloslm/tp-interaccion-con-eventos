# Agregando interacción con eventos
--- 
## Consignas
--- 
### Micro desafío - Paso 1:

 - En index.ejs , agregar un evento para que cada vez que el usuario haga clic sobre el
logo de Digital House se muestre el menú lateral con id="menu" . El estilo y el menú
lateral ya existe en el proyecto de base. Tips: podemos usar el atributo classList
con el método toggle para agregar o quitar la clase class="menu" .

 - En index.ejs , agregar un evento que permita ocultar el menú lateral cuando el
mouse deje el área del menú.

 - En movies.ejs , modificar el práctico de la clase anterior para que el modo oscuro se
aplique si el usuario pasa el mouse sobre el logo de Digital House, en la vista del
listado de películas.

 - En moviesAdd.ejs , establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color.

--- 

### Micro desafío - Paso 2:

En moviesAdd.ejs vamos con un desafío bastante más complejo. Tenemos que crear una
máquina de estados. Nuestro objetivo será detectar cuando el usuario tipee de corrido la
palabra “ secreto ”, en el input para ingresar el título de la película. El problema es que
solamente podemos definir un evento cuando el usuario presiona una tecla y no cuando
escribe toda una palabra. Por eso es que para empezar el ejercicio vamos a definir una
variable estadoSecreto que empiece con el número 0 .

Definiremos un evento al presionar una tecla que implemente la siguiente lógica:
1. Si el estado es 0 y se presiona la tecla S, la variable estadoSecreto pasa a 1.
2. Si el estado es 1 y se presiona la tecla E, la variable estadoSecreto pasa a 2.
3. Si el estado es 2 y se presiona la tecla C, la variable estadoSecreto pasa a 3.
4. Si el estado es 3 y se presiona la tecla R, la variable estadoSecreto pasa a 4.
5. Si el estado es 4 y se presiona la tecla E, la variable estadoSecreto pasa a 5.
6. Si el estado es 5 y se presiona la tecla T, la variable estadoSecreto pasa a 6.
7. Si el estado es 6 y se presiona la tecla O, la variable estadoSecreto vuelve a 0 y se
dispara una alerta que diga “SECRETO MAGICO ”.
8. Si no se cumple ninguna de las condiciones, el estado vuelve a 0.