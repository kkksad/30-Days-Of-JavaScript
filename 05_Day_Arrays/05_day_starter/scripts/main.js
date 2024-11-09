
//Task 1
const arr = Array();

//Task 2
const sevenArray = [1,'c',33,true,null,'oh',NaN];

//Task 3
console.log(sevenArray.length);

//Task 4
console.log(sevenArray[0]);
console.log(sevenArray[Math.floor(sevenArray.length/2)]);
console.log(sevenArray[sevenArray.length-1]);


//Task 6
let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//Task 7
console.log(itCompanies);
//Task 8
console.log(itCompanies.length);
//Task 9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length /2)]);
console.log(itCompanies[itCompanies.length-1]);
//Task 10, 11
for (let i of itCompanies){
    console.log(i.toUpperCase);
}
//Task 12
console.log(itCompanies.toString().concat(' are big IT companies'));

//Task 13
function checkCompanyExists(company) {
    if (itCompanies.includes(company)) {
        return company;
    } else {
        return "not found";
    }
}
console.log(checkCompanyExists('Google'));
console.log(checkCompanyExists('7Bits'));

//Task 14
let counter=0;
let filtered = [];
for (let i of itCompanies){
    for (let j of i){
        if (j=='o'){
            counter+=1;
        }
    }
    if ( counter>1){
        filtered.push(i);
    }
    counter=0;
}
console.log(filtered);

//Task 15
itCompanies.sort();
console.log(itCompanies);

//Task 16
itCompanies.reverse();
console.log(itCompanies);

//Task 17
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

//Task 18
let lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);

//Task 19
let index = Math.floor(itCompanies.length / 2);
let middleCompanies;

if (itCompanies.length % 2 === 0) {
    middleCompanies = itCompanies.slice(index - 1, index + 1);
} else {
    middleCompanies = itCompanies.slice(index, index + 1);
}

console.log(middleCompanies);

//Task 20
itCompanies.shift();
console.log(itCompanies);

//Task 21
if (itCompanies.length % 2 === 0) {
    itCompanies.splice(index - 1, 2);
} else {
    itCompanies.splice(index, 1);
}

console.log(itCompanies);

//Task 22
itCompanies.pop();
console.log(itCompanies);

//Task 23
itCompanies = [];
console.log(itCompanies);


//Middle LVL


//Task 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").split(' ');
console.log(words);
console.log(words.length);

//Task 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}


if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

if (Math.floor(Math.random())==1) { 
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);

//Task 4
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

//Task 5
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

//Task 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);