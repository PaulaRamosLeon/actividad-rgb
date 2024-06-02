// Definimos e inicializamos las constantes "cuadros", "controles" y "codigoColor", que se corresponden a los elementos HTML ".cuadro" (una clase), "input" (un tipo de elemento) y "p" (otro tipo de elemento). querySelectorAll selecciona todos los que cumplan esa condición, mientras que querySelector seleccionará el primer elemento que aparezca que cumpla la condición, en este caso el primer "p" (párrafo).

const cuadros = document.querySelectorAll(".cuadro");
const controles = document.querySelectorAll("input");
const codigoColor = document.querySelector("p");

/**
 * Esta función convierte los tres valores rgb en un código hexadecimal 
 * @param {int} r la intensidad del color rojo entre 0 y 255
 * @param {int} g la intesidad del color verde entre 0 y 255
 * @param {int} b la intesidad del color azul entre 0 y 255
 * @returns 
 */
function hexadecimal(r,g,b){

    // Se establece la variable "código", que es una lista vacía
    let codigo = [];
    // Se inicia un bucle que establece que, la primera vez que se realice (primera iteración), la i sea igual a 0. Mientras que la i sea menor a la longitud de la lista "arguments", se realizará el bucle. En cada iteración, a la i se le sumará 1.
    for(let i = 0; i < arguments.length; i++){

        // Se añade un elemento al final de la lista código. Si el argumento es menor a 16, se añadirá 0 + el número; si el número es igual o mayor a 16, se añadirá el número sin nada delante. Cada valor numérico que se le dé (cada argumento), lo convertirá en un string (una cadena de texto) de valor hexadecimal.
        codigo.push((Number(arguments[i]) < 16 ? "0" : "") + Number(arguments[i]).toString(16));
    }
    // La función devolverá la lista con todos los valores unidos y una # delante.
    return `#${codigo.join("")}`;
}

// Hacemos un bucle que recorre los elementos de la lista de los controles.
controles.forEach(function(control,indice){
    // Añadiremos a cada control un EventListener que actuará sobre el evento "input". Cada vez que reciba un input se ejecutará el código del interior de la función.
    control.addEventListener("input",function(){
        // El color de fondo del primer cuadro (el que aparece arriba en la web), se le aplican los valores de los otros tres cuadros (cada uno de ellos es un componente del color), que se convierte en hexadecimal gracias a la función anteriormente definida.
        cuadros[0].style.backgroundColor = hexadecimal(controles[0].value,controles[1].value,controles[2].value);
        // El texto del interior del primer cuadro indica el valor de cada color (definido en cada uno de los cuadros de debajo).
        codigoColor.innerHTML = hexadecimal(controles[0].value,controles[1].value,controles[2].value);
        // Cuando realizas un input sobre las barras de controles, cambia el color de fondo de los cuadros a los que les estás realizando el input.
        cuadros[indice + 1].style.backgroundColor = hexadecimal(indice == 0 ? control.value : 0,indice == 1 ? control.value : 0,indice == 2 ? control.value : 0);
    });
});




