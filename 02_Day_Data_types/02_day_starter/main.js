// 1
let challenge = '30 Days Of JavaScript';

// 2
console.log(challenge);

// 3
console.log(challenge.length);

// 4
console.log(challenge.toUpperCase());

// 5
console.log(challenge.toLowerCase());

// 6
console.log(challenge.substring(0, 2));

// 7
console.log(challenge.substring(3));

// 8
console.log(challenge.includes('Script'));

// 9
console.log(challenge.split());

// 10
console.log(challenge.split(' '));

// 11
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

// 12
console.log(challenge.replace('JavaScript', 'Python'));

// 13
console.log(challenge.charAt(15));

// 14
console.log(challenge.charCodeAt(11));

// 15
console.log(challenge.indexOf('a'));

// 16
console.log(challenge.lastIndexOf('a'));

// 17
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 18
console.log(sentence.lastIndexOf('because'));

// 19
console.log(sentence.search('because'));

// 20
let trimmedString = ' 30 Days Of JavaScript ';
console.log(trimmedString.trim());

// 21
console.log(challenge.startsWith('30'));

// 22
console.log(challenge.endsWith('JavaScript'));

// 23
console.log(challenge.match(/a/g));

// 24
let part1 = '30 Days of';
let part2 = 'JavaScript';
console.log(part1.concat(' ', part2));

// 25
console.log(challenge.repeat(2));

// 26
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 27
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 28
console.log(typeof '10' === typeof 10); // false
console.log(Number('10') === 10); // true

// 29
console.log(parseFloat('9.8') === 10); // false
console.log(Math.ceil(parseFloat('9.8')) === 10); // true

// 30
console.log('python'.includes('on') && 'jargon'.includes('on')); // true

// 31
let sentence2 = 'I hope this course is not full of jargon';
console.log(sentence2.includes('jargon')); // true

// 32
console.log(Math.floor(Math.random() * 101));

// 33
console.log(Math.floor(Math.random() * 51) + 50);

// 34
console.log(Math.floor(Math.random() * 256));

// 35
let randomIndex = Math.floor(Math.random() * challenge.length);
console.log(challenge.charAt(randomIndex));

// 36
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// 37
console.log(sentence.substr(31, 23));

// 38
let sentence3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let count = (sentence3.match(/love/gi) || []).length;
console.log(count);

// 39
let count2 = (sentence.match(/because/g) || []).length;
console.log(count2);

// 40
const sentence4 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const cleanedSentence = sentence4.replace(/[^a-zA-Z\s]/g, '').toLowerCase();
const words = cleanedSentence.split(/\s+/);
const wordCount = {};
words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
});
const mostFrequentWord = Object.keys(wordCount).reduce((a, b) => wordCount[a] > wordCount[b] ? a : b);
console.log(mostFrequentWord);

// 41
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text.match(/\d+/g).map(Number);
const monthlySalary = numbers[0];
const annualBonus = numbers[1];
const monthlyCourses = numbers[2];
const totalAnnualIncome = (monthlySalary + monthlyCourses) * 12 + annualBonus;
console.log(totalAnnualIncome);
