/*'use strict';

let productId = 1234;
console.log(productId);
console.log(window.productId);*/

// productId = 456;
// console.log(productId);

// let productId = 123;

// showProductId();
// function showProductId(){
//     console.log(222);
// }

//Passes
// 1. function should call showProductId()
// 2. it should call the program from star/top to down.


/*function showProductId(){
    let productId = 111;

    function fix(){
        let productId = 222;
        console.log('in fix: ', productId);
    }
    fix();

    console.log('in showProductId: ', productId);
}
showProductId();*/

//let productId = 123;
// const app = {
//     productId: 111,
//     userName: 'Joe',
//     orderNumber : 1232
// };

// function showProductId(){
//     console.log(app.productId);
// }
// showProductId();

// const conatiners = document.getElementsByClassName('container');
// conatiners[3].classList.add('d-none');
// console.log(conatiners);

// const values = ['a', 'b', 'c'];
// //forEach
// values.forEach(function(item){
//     console.log(item);
// });

// const values = ['a', 'bbb', 'c'];
// //find()
// const found = values.find(function(item){
//     //console.log('item: ', item);
//     return item.length > 1;
// });
// console.log(found);

//const values = ['a', 'b', 'c', 'y', 'z'];
//filter()
// const set = values.filter(function(item){
//     console.log('item: ', item);
//     return item > 'b';
// });
// console.log(set);

//indexOf()
// console.log(values.indexOf('b'));
// console.log(values.indexOf('r'));

// const values = ['a', 'b', 'c', 'd', 'e'];
// //const newValues =  values.slice(1, 4);
// //const newValues = values.slice();
// //const newValues = values.splice(2, 2);
// values.splice(2, 1 ,'hello');
// //console.log(newValues);
// console.log(values);

// const values = ['a', 'b', 'c'];
// console.log(values);
// console.log(typeof values);
// console.log(Array.isArray(values));
// console.log(values[0]);
// values[0] = 'aaa';
// console.log(values[0]);
// console.log(values[012]);

//values.push('d', 'e');
// const last = values.pop();
// console.log(values, last);

// const first = values.shift();
// console.log(values, first);
// values.unshift('hello', 'world');
// console.log(values);

/*const button = document.getElementById('see-review');

button.addEventListener('click', function(){
    const review = document.getElementById('review');

    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }else{
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
    
});*/

// const button = document.getElementById('see-review');

// button.addEventListener('click', function(){
//     console.log('click');
// });

// const header = document.getElementById('message');
// header.style.color = 'blue';
// header.style.fontWeight = '800';

// let s = 'Hello';
// showMessage(s.charAt(0));

// let now = new Date();
// showMessage(now.toDateString());
// showMessage(Math.abs(-23));

/*
//Passing Objects to Functions
let person = {
    name: 'John',
    age: 32,
    partTime: false
};

function incrementAge(person){
    person.age++;
}

incrementAge(person);
showMessage(person.age);*/

/*
//Passing Objects to Functions
let message = 'Hello';

function changeMessage(message){
    message = 'Hi!';
}

changeMessage(message);

showMessage(message);*/

/*let person = {
    name: 'john',
    age: 32,
    parttime: false,
    showInfo: function(realAge){
        //showMessage('in showInfo');
        showMessage(this.name + ' is ' + realAge);
    }
};

//person.showInfo(34);
showMessage(typeof person.showInfo);*/


/*let mySymbol = Symbol();

let person = {
    name: 'john',
    age: 32,
    parttime: false,
    [mySymbol]: 'secretInformation'
};
person.age = 34;
person['age'] = 44;

showMessage(person.age);
showMessage(person[mySymbol]);
console.log(person[mySymbol]);*/

//changePercentOff(20);

/*let key = 42;

function getSecretCode(value){

    let keyGenerator = function(){
        let key = 12;
        console.log('in keyGenerator: ', key);
        return key;
    }

    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;
}

let secretCode = getSecretCode(2);
showMessage(secretCode);*/


// let myFunction = function (message, firstName){
//     console.log(message);
//     console.log(firstName);
// }
// myFunction('Hello');
// myFunction();

//Function Expressions
// let myFunction = function loggingFunction(){
//     console.log('Here is the message');
// }
// myFunction();

// function logMessage(){
//     console.log('Here is the message');
// }
// logMessage();
// logMessage();

// let person = {
//     firstName: 'John',
//     lastName: 'Adams'
// };
// showMessage(person.firstName);

// let saved;
// saved = null;
// showMessage(saved);
// console.log(saved);

// let saved;
// showMessage(saved);
// console.log(saved);

// let amount = Number.parseFloat("123.12A");
// showMessage(amount);

// let amount = Number.parseFloat("A123.12");
// showMessage(typeof amount);

// let amt = 123;
// amt = amt.toString();
// showMessage(typeof amt);

//let message = 'Hello \'World\'';
// let name = 'kg';
// let message = `Hello ${name}`;
// showMessage(message);

// let price = -20;
// showMessage(price);

// let price = 1.1 + 1.3;
// showMessage(price);

// let price = 20.99;
// showMessage(typeof price);

// let price = 3 + 2 * 2;
// let price = (3 + 2) * 2;
// showMessage(price);

//var, let & naming variables

// let welcome = 'WelCome';

// let price = 45.54,
//     name = 'Hiking Boots12',
//     discounted = false;

// showMessage(welcome);






