class User {
    // name = 'readonly'

    constructor(name = 'readonly') {
        Object.defineProperty(this, "name", { value: name, writable: false })
    }
}



const u = new User();

u.name = 'changed'
console.log(u.name);


// even better:
class User2 {

    #_name = ''

    constructor(name = 'readonly') {
        this.#_name = name;
    }

    get name() {
        return this.#_name
    }
}

const u2 = new User2();

u2.name = 'changed'
console.log(u2.name);



export { };