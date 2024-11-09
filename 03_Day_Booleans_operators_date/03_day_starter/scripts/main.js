
//Task 1
let firstName = "Andrei";
let lastName = "Tate";
let country = "USA";
let city = "New York";
let age = 54;
let isMarried = true;
let year = 2077;

let info = [firstName, lastName, country, city, age, isMarried, year];

for (let i = 0; i < 7; i++) {
    console.log(typeof info[i]);
}
//Task 2
console.log(typeof '10' === typeof 10);
//Task 3
console.log(parseInt('9.8') === 10);
//Task 4
console.log(478 > 366); 
console.log(4 == '4'); 
console.log(true !== 0);

console.log(5444 < 812); 
console.log(4 == 0); 
console.log(52<44); 

//Task 5 
let pythonLength = "python".length; 
let jargonLength = "jargon".length; 
console.log(pythonLength !== jargonLength);
//Task 6 

//Task 7
const now = new Date();

console.log(now.getFullYear()); 
console.log(now.getMonth() + 1); 
console.log(now.getDate()); 
console.log(now.getDay()); 
console.log(now.getHours()); 
console.log(now.getMinutes()); 
console.log(Math.floor(now.getTime() / 1000));

//Hard LVL
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const NOW = new Date();
const formattedTime = formatDateTime(NOW);

console.log(formattedTime);