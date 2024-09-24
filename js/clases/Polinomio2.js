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