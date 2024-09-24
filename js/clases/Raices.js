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