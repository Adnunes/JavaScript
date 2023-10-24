class Book{
    constructor(title, pages, isbn){

        this.title = title;
        this.pages = pags;
        this.isbn  = isbn;
    }

    printIsbn(){
        console.log(this.isbn);
    }


}

// sintaxe simplificada para usar herança entre classes

class ItBook extends Book{
    constructor(title, pages, isbn){
        super(title, pages, isbn);
        this.technology = technology;
    }

    printTechnology(){
        console.log(this.technology)
    }

};


// empora a sintax dessa nova forma de declarar classes em js seja muito semelhante a java e c, é
// bom lembrar que POO em js é feita por meio de prototipo

// trabalhando com getters e setters

class Person{
    constructor(name){
        this._name= name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let lotrChar = new Person('Frodo');

console.log(lotrChar.name);

lotrChar.name = 'Gandalf';
console.log(lotrChar.name);

lotrChar._name = 'Sam';
console.log(lotrChar.name)