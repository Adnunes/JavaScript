interface Person{
    name: string,
    age:number

}

function printName(person: Person){
    console.log(person.name)
}

const john = {name:'john', age:21};
const mary = {name: "Mary", age:21, phone:'123-456'};

printName(john)