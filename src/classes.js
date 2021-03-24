import { compose, pipe } from 'lodash/fp';


function sayHi() {
    return "Hello World";
}

const fn = sayHi;
sayHi();

function greeting(sayHi) {
    console.log(sayHi());
}

greeting(fn);

function sayHello() {
    return function () {
        return "Hi world"
    }
}

console.log(sayHello());





//high order function - acept function in return or parameter
let numbers = [1, 2, 3];
numbers.map(p => p * 2);

setTimeout(() => console.log('hi'), 1000);

let inp = "   Java   ";
let outp = "<div>" + inp.trim() + "</div>";
let result = "<div>java</div>";

const myTrim = str => str.trim();
const myWrap = str => `<div>${str}</div>`;
const myLower = str => str.toLowerCase();

result = myWrap(myLower(myTrim(inp)));
console.log(result);





const printComp = compose(myWrap, myLower, myTrim);
const printPipe = pipe(myTrim, myLower, myWrap);
console.log(printComp(inp));
console.log(printPipe(inp));


// currying 
function add(a) {
    return function (b) {
        return a + b;
    }
}

let sum = add(1)(5);
console.log(sum);
sum = a => b => a + b;


const myWrapSpan = (type, str) => `<${type}>${str}</${type}>`;
const myWrapSpaned = type => str => `<${type}>${str}</${type}>`;

const transformSpan = pipe(myTrim, myLower, myWrapSpaned('b'));
console.log(transformSpan(inp));

const person = { name: 'John' };
const person2 = {
    name: 'Jane',
    address: {
        zip: 'M4Y',
        city: 'San Franscisco'
    }
};
const updated = { ...person, age: 30 };
const replaced = { ...updated, name: 'Max' };
console.log(updated);
console.log(replaced);

let newPerson = { ...person2 };
//newPerson.address.city = 'NewJersey'; WRONG BECAUSE CHANGE ALL DATAS...

newPerson = {
    ...person2,
    address: {
        ...person2.address,
        city: 'NewYork'
    }
}

console.log(person2);
console.log(newPerson);

const nus = [1, 2, 3];

const arr = [...nus, 4];
console.log(arr);

