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






