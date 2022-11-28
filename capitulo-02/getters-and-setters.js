class Person
{

    #name;

    constructor(name)
    {
        this.#name = name;
    }

    get name()
    {
        return this.#name;
    }

    set name(newName)
    {
        this.#name = newName;
    }

}

const p = new Person('Maurisio');

console.log(`Pessoa antes de mudar o nome: ${p.name}`);
p.name = 'Marselo';
console.log(`Pessoa depois de mudar o nome: ${p.name}`);

// tentar alterar/obter o atributo privado diretamente causará um erro!!
//p.#name = 'xD';
// console.log(p.#name);