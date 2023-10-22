
// uma função
function sayHello(){
    console.log("Hello world!!")

}
sayHello();

// um objeto
obj={name:{first:'gandalf', last:'the grey'}, address:'Middle earth'};

console.log(obj['name']['last'])

// em programação orientada a objeto, um objeto é a instância de uma classe. Uma classse define as características do objeto

function Book(title, page, isbn){
    this.title = title;
    this.page = page;
    this.isbn = isbn;
    this.printIsbn = function(){
        console.log(this.isbn);
    };

};

var book = new Book('A pedra filosofal', 200, 1234);

console.log(book.title);

book.printIsbn();