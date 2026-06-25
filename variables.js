//var,let,const

var name="Milton";
console.log(name);
name="eshan";
console.log(name);
var name = "tanjim";
console.log(name);
var name = "nahin & jahid";
console.log(name);

//continuously output dekhar jonne , "node --watch filename.extension" dilei hobe. erpor ctrl+s dilei auto ooutput dekhabe.

let age=20;
console.log(age);
// let age=30;
// console.log(age); // error karon let variable re-declare kora jabe na. but value change kora jabe. 
age=40;
console.log(age);


const pi=3.14;
//pi=3.16;
console.log(pi); // error karon const variable re-declare kora jabe na. and value change kora jabe na.
//value change kora jabe sudhu tokhon jokhon const variable er moddhe object/array thakbe. tokhon shei object ar array er moddher value change kora jabe but shei object ar array ke re-declare kora jabe na.

const person=['nahin','jahid','eshan'];
console.log(person);
person[0]='tanjim';
console.log(person);
console.log(person.at(0)); //person.at(index); sudhu read korte pare, write korte parbe na. but person[index] write korte parbe.
person.push('milton');
console.log(person);
console.log(person.push('milton')); //push() method return kore array er new length. but push() method array ke modify kore. so push() method write korte parbe.
console.log(person);
console.log(person.pop()); //pop() method return kore array er last element. but pop() method array ke modify kore. so pop() method write korte parbe.
console.log(person);


const person1={
    name: "nahin",
    age: 20,
    address: "dhaka"
};
console.log(person1);
person1.name="jahid";
console.log(person1); //object er moddher value change kora gese.
const person2={
    name: "tanjim",
    age: 30,
    address: "dhaka"
};
console.log(person); //error karon const variable "person" re-declare kora jabe na. and value change kora jabe na.