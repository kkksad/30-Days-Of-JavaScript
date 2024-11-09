// Easy LVL
const Countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1
// forEach - функция для кажд. эл. массива. Он не возвращает новый массив.
// map - функция для кажд. эл. массива. Он создает новый массив.
// filter - фильтрует массив и создает новый из отфильтрованных эл.
// reduce - применяет функцию к аккумулятору и элементам массива, чтобы свести его к одному выходному значению.

// 2
function callbackFunction(element) {
  console.log(element);
}

// 3-4-5
Countries.forEach(callbackFunction);
names.forEach(callbackFunction);
numbers.forEach(callbackFunction);

// 6-7-8-9-10
const uppercasedCountries = Countries.map(country => country.toUpperCase());
console.log(uppercasedCountries);

const lengthCountries = Countries.map(country => country.length);
console.log(lengthCountries);

const squaredNumbers = numbers.map(number => number ** 2);
console.log(squaredNumbers);

const uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames);

const prices = products.map(product => product.price);
console.log(prices);

// 11-12-13-14-15
const filteredCountries = Countries.filter(country => country.includes('land'));
console.log(filteredCountries);

const sixCharacterCountries = Countries.filter(country => country.length === 6);
console.log(sixCharacterCountries);

const moreSixCountries = Countries.filter(country => country.length >= 6);
console.log(moreSixCountries);

const startWithE = Countries.filter(country => country.startsWith('E'));
console.log(startWithE);

const filteredProducts = products.filter(product => typeof product.price === 'number');
console.log(filteredProducts);

// 16
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}

// 17
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 18
Countries.unshift('Estonia');
const sentence = Countries.reduce((acc, curr, index) => {
  if (index === Countries.length - 1) {
    return `${acc} and ${curr} are north European countries`;
  } else {
    return `${acc}, ${curr}`;
  }
}, '');
console.log(sentence);

// 19
// some - минимум 1 элемент удовлетворяет условию
// every - все элементы

// 20
const hasLongName = names.some(name => name.length > 7);
console.log(hasLongName);

// 21
const landCountries = Countries.every(country => country.includes('land'));
console.log(landCountries);

// 22
// find - ищет первый элемент удовл. условию
// findIndex - ищет индекс первого элемента удовлю условию

// 23
const onlySixLetter = Countries.find(country => country.length === 6);
console.log(onlySixLetter);

// 24
const sixLetterCountryIndex = Countries.findIndex(country => country.length === 6);
console.log(sixLetterCountryIndex);

// 25-26
const norwayIndex = Countries.findIndex(country => country === 'Norway');
console.log(norwayIndex);

const russiaIndex = Countries.findIndex(country => country === 'Russia');
console.log(russiaIndex);

// Middle LVL
// 1
const totalPrice = products
  .map(product => product.price)
  .filter(price => typeof price === 'number')
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalPrice);

// 2
const TotalPrice = products.reduce((acc, curr) => {
  if (typeof curr.price === 'number') {
    return acc + curr.price;
  } else {
    return acc;
  }
}, 0);

console.log(TotalPrice);

// 3
function categorizeCountries(pattern) {
  return Countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
}

console.log(categorizeCountries('land'));
console.log(categorizeCountries('ia'));
console.log(categorizeCountries('stan'));

// 4
function countLetters() {
  return Countries.reduce((acc, curr) => {
    const initial = curr[0].toLowerCase();
    if (acc[initial]) {
      acc[initial]++;
    } else {
      acc[initial] = 1;
    }
    return acc;
  }, {});
}
console.log(countLetters());

// 5
function getFirstTenCountries() {
  return Countries.slice(0, 10);
}
console.log(getFirstTenCountries());

// 6
function getLastTenCountries() {
  return Countries.slice(-10);
}
console.log(getLastTenCountries());

// 7
function getMostCommonInitialLetter() {
  const initials = Countries.map(country => country[0]);
  const initialCounts = initials.reduce((acc, initial) => {
    acc[initial] = (acc[initial] || 0) + 1;
    return acc;
  }, {});

  let mostCommonInitial = '';
  let maxCount = 0;

  for (const [initial, count] of Object.entries(initialCounts)) {
    if (count > maxCount) {
      mostCommonInitial = initial;
      maxCount = count;
    }
  }

  return mostCommonInitial;
}

console.log(getMostCommonInitialLetter());
