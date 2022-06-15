 "use strict";

// console.log("Hello Aaira");

// let ValueStart1 = "Aaira";
// console.log(ValueStart1);

// let _de$sk =25;
// console.log(_de$sk ** 0.5);

// let first_name; // snake case writing
// let firstName;  // camal case writing convention

// var name = "Aaira";
// var name = "Hazel";
// console.log(name);

// console.log(6 % 10);

// let i= 0;

// while(i<10)
// {
//     console.log(i++);
// }

// let myName = "                      Aaira                  ";
// console.log(myName.length);
// myName.trim();
// console.log(myName.trim().length);


// let age= 17;
// console.log(typeof age);
// console.log(typeof (age +""));
// console.log( +name);

// let string1= "17";
// let string2= "10";

// let string3= +string1 + +string2;
// console.log(typeof string3, string3);

// string3= string1 + string2;
// console.log(typeof string3, string3);

// let A;
// console.log(A, typeof A);

// A= 93;
// A = 93 + "";
// console.log(typeof A, A);
// A = +A;
// console.log(typeof A, A);

// let age= 19;
// let drink = age >= 5? "coffee" : "milk";  //ternary operator;

// // if(age>=5)
// // drink =  "coffee";
// // else
// // drink ="milk";

// console.log(drink);

// let num= 0;
// let total =0;

// while(num <= 10){
//     total = total + num++;
// }

// console.log(total);


let vegetables =["brocolli", "capsicum", "lotus root", 
                "spinach", "rigid gourd", "eggplant", "bottle gourd"];
let fruits = ["apple", "mango", "banana", "grapes"];

let[q,r,...rest] = vegetables; 
// fruits.push("grapefruit","fig","melon",...vegetables);
// console.log(fruits);
// const mix =[...fruits];
// const mix =[];
//  mix.push(...fruits);
// console.log(mix);
// console.log(mix===fruits);
// let f = fruits.slice(0).concat("grapefruit","fig","melon");
// let f = [].concat(fruits,["grapefruit","fig","melon"],"strawberry","lichi");
// console.log(f);

// let basket = fruits;
// console.log(fruits);
// console.log(basket);
// fruits.unshift("pineapple", "kiwi");
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits.pop());
// console.log(fruits);
// fruits.unshift("pineapple"),fruits.push("kiwi"),fruits.push("grapes");
// console.log(fruits);

// let num1= 4;
// let num2 =  num1;
// num1++;
// console.log(num1);
// console.log(num2);

let fruit = [fruits,"item2", "item3"];
// console.log(fruit);

// console.log(fruits);
// console.log(fruits.concat("item1","item2","item3", vegetables));
// console.log([...fruits,...vegetables]);

// function multiply(multiplier, ...arr)
// {    console.log(arr);
//    return arr.map(element => multiplier*element);
// }

// var array = [10,1,2,3,4,5,6];
// console.log(multiply(...array));


// let obj = {
//     x: 5,
//     y:7.6,
//     z:-5.98
// }

// const{x,y}=obj;
// console.log(x);
// console.log(y);
// console.log(Math);
// console.log(Date);

// var myObject ={

//     myFunction: function(){
        
//         console.log("Name is Aaira");
//         console.log(this===myObject);
//         return "Aaira";
//     }
// };

// var myFunction1 = (myObject.myFunction);
// // myFunction();
// console.log( myFunction1());


// function Coo(a,b) {

//     console.log(a+b);
//     return 'Coo is executed';
// }

// function Foo() {
    
//     console.log(Coo(3,7));
//     console.log(typeof Coo(3,7));
//     console.log(typeof Coo);
//     return 'Foo is executed';
// }

// function Bar(arg) {
//     console.log(arg);
//     var function_Bar= 1000;
//     // return( "Bar is executed " + function_Bar);
//     return Foo
// }

// // Store the >>result of the invocation of the Foo function<< into X
// var x = Foo();
// console.log(x);

// // Store >>a reference to the Bar function<< in y 
// //   >> turing y into function pointer <<
// var y = Bar;
// // Invoke the referenced method
// y('Woah!');
// console.log(y("pi"));
// console.log( typeof y)
// console.log( typeof y('soliditiy'))

// // // Also, show what y is:
// console.log(y);

// // // Now, try Bar **with** parentheses:
// var z = Bar('Whut?');

// // // By now, 'Whut?' as already been output to the console; the below line will
// // // return undefined because the invocation of Bar() didn't return anything.
// console.log(z);

// let numbers = [0,1,2,3,4,5,6,7,8,9];

// numbers.forEach( (scale,index,numbers) => {
//     console.log(` the element at index ${index} when multiplied with scale ${scale} for ${numbers} is ${number * scale}`)
// });

// const person = {
//     name : "Aaira",
//     age : 17,
//     interset : "Block Chain"
// }

// for(let key of person){
//     console.log(person[key]);
// }

// let Key = "email";

// person[Key] = "aaira_fernendez@gmail.com";

// let info = "login";

// person[info] = function(){
//     console.log(`${this.name} is ${this.age} years old today`);
// }

// console.log(person);

// function fun1(){
//     fun2();
//     let myVar = "Aaira";
//     function fun2(){
//         console.log(myVar);
//     }
   
    
// }

// fun1();


// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
//     key3 : "value3"
// };
// const obj2 = Object.create(obj1);
//     obj2.key4 = "value4";
//     obj2.Key3 = "unique";


// console.log(obj2.key1);
// console.log(obj2);
// console.log(obj2.__proto__);

function createUser(firstName,lastName,age,email,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}

createUser.prototype.is18 = function(){
    return  this.age >= 18;
}

createUser.prototype.sing = function(){
    return `I am healthy and wealthy.`;
}

const user1 = new createUser("Aaira", "fernandez", 15, "aairafernandez@gmail.com", "huston, New York");
console.log(user1);
// console.log(user1.about());
// console.log(user1.__proto__);

class Animal{
    constructor(name, age){
        console.log(`Animal started`);
        this.name = name;
        this.age = age;
        console.log(`Animal ended`);
    }

    eat()
    {
        return `${this.name} is eating`;
    }

    isCute(){
        return true;
    }

    isSuperCute(){
        return this.age >= 1;
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        console.log("Dog started");
        super(name,age);
        this.speed = speed;
        console.log(`Dog ended`);
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph.`
    }
}

// const lucy = new Dog("Lucy", 1, 45);
// console.log(lucy);
// // console.log(lucy.run());
// console.log(Object.getPrototypeOf(new Dog()));
// const cockatiel = new Animal("Twilight", 1);
// console.log(Object.getPrototypeOf(cockatiel));

const F = function () {
    this.a = 1;
    this.b = 2;
 };
 const o = new F(); // { a: 1, b: 2 }
 
 // add properties in F function's prototype
//  F.prototype.b = 3;
//  F.prototype.c = 4;
//  console.log(o.a); 
//  console.log(o.b);
//  console.log(o.c); 
//  console.log(o.d); 
//  console.log(Object.prototype);
//  console.log(Animal.prototype);
//  console.log(Dog.prototype);

const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    }
  }
  
  function Person(name) {
    this.name = name;
  }
  Person.prototype = personPrototype;
//   console.log(Person.prototype);

  Person.prototype.constructor = Person;
  console.log(Person.prototype.constructor);