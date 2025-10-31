console.log('=========================#1=============================')
console.log('sumBigIntegers приймає два значення, перетворює їх в BigInt та повертає їхню суму');
function sumBigIntegers(numStr1, numStr2) {
  return BigInt(numStr1) + BigInt(numStr2);
}
console.log(`sumBigIntegers('9007199254740991', '9007199254740991') = ${sumBigIntegers('9007199254740991', '9007199254740991')}`);
console.log(sumBigIntegers('9007199254740991', '9007199254740991') + ' тип ' + typeof(sumBigIntegers('9007199254740991', '9007199254740991')));
console.log('======================================================')

console.log('=========================#2=============================');
console.log('greet приймає два значення, massage та name, повертає конкатинований рядок "msg, name" з врахуванням пробілів');
function greet(msg, name) {
  return msg +', ' + name;
}

console.log(`greet('Hi', 'John') = ${greet('Hi', 'John')}`) // Hi, John
console.log(`greet('Hey', 'Bob') = ${greet('Hey', 'Bob')}`) // Hi, Bob
console.log(`greet('Hello', 'Mary') = ${greet('Hello', 'Mary')}`) // Hi, Mary
console.log('======================================================')

console.log('=========================#3=============================');
console.log('getRandomInt приймає два значення, min та max, повертає рандомне значення в діапазоні min та max включно');
function getRandomInt(min, max) {
  return Math.floor( min + Math.random() * (max - min));
}

 console.log(`getRandomInt(1, 10) = ${getRandomInt(1, 10)}`); // виводить випадкове число від 1 до 10
 console.log(`getRandomInt(40, 50) = ${getRandomInt(40, 50)}`); // виводить випадкове число від 40 до 50
 console.log(`getRandomInt(1, 100) = ${getRandomInt(1, 100)}`); // виводить випадкове число від 1 до 100
 console.log('======================================================')