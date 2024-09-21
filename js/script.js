// CLASES

class Polinomio2{

    #a;
    #b;
    #c;

    constructor(a,b,c){
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    get a(){return this.#a};
    get b(){return this.#b};
    get c(){return this.#c};

    set a(a){this.#a = a};
    set b(b){this.#a = b};
    set c(c){this.#a = c};
}

class Raices{

    #x1;
    #x2;

    constructor(x1,x2){
        this.#x1 = x1;
        this.#x2 = x2;
    }

    get x1(){return this.#x1};
    get x2(){return this.#x2};

    set x1(x1){this.#x1 = x1};
    set x2(x2){this.#x2 = x2};

    imprimirRaices(){return `x1 = ${this.#x1} ; x2 = ${this.#x2}`};
}

//FUNCIONES

/**
 * Escribe el parametro en consola.
 * @param {*} imprimir - Parametro para imprimir en consola
 * @returns {void}
*/
const imprimirEnConsola = imprimir => {console.log(imprimir)};

/**
 * Calcula el discriminante de un polinomio cuadratico o tambien llamado de grado 2
 * @param {object} polinomio2Obj Instacia de la clase Polinomio2
 * @returns {number}
 */
const discriminante = (polinomio2Obj) => (Math.pow(polinomio2Obj.b, 2)) - (4*polinomio2Obj.a*polinomio2Obj.c);

/**
 * Calcula las raices reales distintas de un polinomio de grados 2
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @param {number} disc discriminante del polinomio
 * @returns {object} Objeto de la clase Raices
 */
function raicesRealesDistintas(a,b,disc){
    let x1 = (-b+Math.sqrt(disc))/(2*a);
    let x2 = (-b-Math.sqrt(disc))/(2*a);
    const raicesOBJ = new Raices(x1,x2);
    return raicesOBJ;
}

/**
 * Calcula las raices repetidas de un polinomio de grados 2
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @returns {object} Objeto de la clase Raices
 */
function raicesRealesRepetidas(a,b){
    let raiz = -b/(2*a);
    const raicesOBJ = new Raices(raiz,raiz)
    return raicesOBJ;
}

/**
 * Calcula las raices complejas de un polinomio de grados 2
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @param {number} disc discriminante del polinomio
 * @returns {object} Objeto de la clase Raices
 */
function raicesComplejas(a,b,disc){
    let primerTermino = -b / (2 * a);
    let segundoTermino = (Math.sqrt(-disc)) / (2 * a);
    let x1 = `${primerTermino} + ${segundoTermino}i`;
    let x2 = `${primerTermino} - ${segundoTermino}i`;

    if (segundoTermino < 0){
        x1 = `${primerTermino} - ${-1*segundoTermino}i`;
        x2 = `${primerTermino} + ${-1*segundoTermino}i`;
    }

    if(primerTermino === 0){
        x1 = `${segundoTermino}i`;
        x1 = `${-1*segundoTermino}i`;
        if(segundoTermino < 0){
            x1 = `- ${-1*segundoTermino}i`;
            x2 = `+ ${-1*segundoTermino}i`;
        }
    }
    const raicesOBJ = new Raices(x1,x2);
    return raicesOBJ;
}

/**
 * Determina el tipo de raices y las calcula
 * @param {object} polinomio2Obj - Instancia de la clase Polinomio.
 * @returns {string}
 */
function calcularResolvente(polinomio2Obj){
    let mensajeSalida = "";
    let raicesOBJ = new Raices();
    let disc = discriminante(polinomio2Obj);
    if(disc < 0){
        mensajeSalida = "Raices Complejas";
        raicesOBJ = raicesComplejas(polinomio2Obj.a, polinomio2Obj.b,disc);
    } else if(disc === 0){
        mensajeSalida = "Raices Reales Repetidas";
        raicesOBJ = raicesRealesRepetidas(polinomio2Obj.a,polinomio2Obj.b);
    } else{
        mensajeSalida = "Raices Reales Distintas";
        raicesOBJ = raicesRealesDistintas(polinomio2Obj.a,polinomio2Obj.b,disc);
    }
    let resultado = document.querySelector("#resultado");
    localStorage.setItem("mensajeSalida", JSON.stringify(mensajeSalida));
    localStorage.setItem("x1", JSON.stringify(raicesOBJ.x1));
    localStorage.setItem("x2", JSON.stringify(raicesOBJ.x2));
    resultado.innerHTML = `<p>${mensajeSalida}</p>`;
    resultado.innerHTML += `<p>x1: ${raicesOBJ.x1}</p>`;
    resultado.innerHTML += `<p>x2: ${raicesOBJ.x2}</p>`;
    
}

/**
 * Validacion que la constante ingresada de un polinomio sea un numero
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @param {number} c constante independiente del polinomio
 * @returns {boolean}
 */
const validacionDeConstante = (a,b,c) =>{
    valido = true;
    let constantes = [a,b,c];
    let resultados = document.querySelector("#resultado");
    for(let i = 0 ; i < constantes.length ; i++){
        dato = parseFloat(constantes[i]);
        if(isNaN(dato)){
            let mensaje = "Las constantes deben ser valores numericos";
            resultados.innerHTML = `<p>${mensaje}</p>`;
            valido = false;
            break
        } else if(i == 0 && dato === 0){
            let mensaje = "La constante A debe ser distinta de cero";
            resultados.innerHTML = `<p>${mensaje}</p>`;
            valido = false;
            break
        }
    }
    return valido
}

/**
 * Lee los datos ingresados por el usuario de un polinomio de grado 2 y muestra el resultado
 */
function poliCuadratico(a,b,c){
    if(validacionDeConstante(a,b,c)){
        localStorage.setItem("a", JSON.stringify(a));
        localStorage.setItem("b", JSON.stringify(b));
        localStorage.setItem("c", JSON.stringify(c));
        const polinomio2Obj = new Polinomio2(a,b,c);
        calcularResolvente(polinomio2Obj);
    }
}

const obtenerConstantes = () => {
    let resultados = document.querySelector("#resultado");
    resultados.innerHTML = "";
    let constanteA = document.querySelector("#constanteA").value;
    let constanteB = document.querySelector("#constanteB").value;
    let constanteC = document.querySelector("#constanteC").value;
    poliCuadratico(constanteA,constanteB,constanteC);
}

/**
 * MAIN
 */

const principal = () => {
    let constanteA = document.querySelector("#constanteA");
    let constanteB = document.querySelector("#constanteB");
    let constanteC = document.querySelector("#constanteC");
    constanteA.value = JSON.parse(localStorage.getItem("a"));
    constanteB.value = JSON.parse(localStorage.getItem("b"));
    constanteC.value = JSON.parse(localStorage.getItem("c"));

    let resultados = document.querySelector("#resultado");
    let mensaje = JSON.parse(localStorage.getItem("mensajeSalida"));
    let x1 = JSON.parse(localStorage.getItem("x1"));
    let x2 = JSON.parse(localStorage.getItem("x2"));
    resultados.innerHTML = `<p>${mensaje}</p>`;
    resultados.innerHTML += `<p>x1: ${x1}</p>`;
    resultados.innerHTML += `<p>x2: ${x2}</p>`;

    let calcular = document.querySelector("#calcularRaices");
    calcular.addEventListener("click", obtenerConstantes);
}
/*EJECUCION*/
principal();




