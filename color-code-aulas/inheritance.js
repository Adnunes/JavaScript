// class Person{
//      talk(){
//           return "talking";

//      } 

// }


// const me  = new Person();
// const you = new Person();

// console.log(me.talk())
// you.talk();

// Person.prototype.talk = function(){
//      return "Hello World"
// }

// console.log(me.talk())

class Person{
     talk(){
          return "talking"
     }

}

const me = new Person();

console.log(me.talk());

class SuperHUuman extends Person{
     fly(){
          return "flying";

     }
}

const you = new SuperHUuman();

console.log(you.fly());
console.log(you.talk());


