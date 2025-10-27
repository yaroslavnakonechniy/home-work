console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних');

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */
const myNum = 10;
const myStr = 'some string';
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {first: 'First Name', last: 'Last Name'};

console.log('=======================#1=======================');
console.log('myNum = '+ myNum);
console.log('myStr = '+ myStr);
console.log('myBool = '+ myBool);
console.log('myArr = '+ myArr);
console.log('myObj = '+ myObj);
console.log('================================================');
// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'
console.log('=======================#2=======================');
let myNum2 = 1.23456;
console.log('myNum2 = '+ myNum2);
let decimal2 = myNum2.toFixed(2);
console.log('decimal2 = '+ decimal2);
console.log('================================================');
/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum2, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2

console.log('=======================#3=======================');
let myBigInt = 123n;
console.log('myBigInt = '+ myBigInt);
myBigInt += 1n;
console.log('myBigInt += 1n = '+ myBigInt);
console.log('================================================');
/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */

// myBigInt