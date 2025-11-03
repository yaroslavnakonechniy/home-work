console.log('=========================#1=&&=#2=============================')

let userObj = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 18, 
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

}

console.log(userObj);
console.log(userObj.fullName());
console.log('======================================================')

console.log('=========================#3=============================');

function defUpperStr(myText) {
  return (myText?.toUpperCase()) || 'DEFAULT TEXT';
}
console.log(defUpperStr('My text')) // MY TEXT
console.log(defUpperStr())             // DEFAULT TEXT

console.log('=========================#4=============================');

function evenFn(n){
    let mus = [];
    for (let i = 1; i <= n; i++){
        if( i % 2 === 0){
            mus.push(i);
        }
    }
    return mus;
}

console.log(evenFn(10)); 
console.log(evenFn(15)); 
console.log(evenFn(20)); 

console.log('======================================================');

console.log('=========================#5=============================');

function weekFn (n) {
    switch (n){
        case 1:
            return 'понеділок';
        break;
        case 2:
            return 'вівторок';
        break;
        case 3:
            return 'середа';
        break;
        case 4:
            return 'четверг';
        break;
        case 5:
            return 'пятниця';
        break;
        case 6:
            return 'субота';
        break;
        case 7:
            return 'неділя';
        break;
        default:
            return null;
    }
}

console.log(weekFn(1));   // 'Понеділок'
console.log(weekFn(3));   // 'Середа'
console.log(weekFn(7));   // 'Неділя'
console.log(weekFn(9));   // null
console.log(weekFn(1.5)); // null
console.log(weekFn('2')); // null

console.log('======================================================');

console.log('=========================#6=============================');
function ageClassification(n){
  return n < 0 ? null :
         n <= 24 ? 'Дитинство' :
         n <= 44 ? 'Молодість' :
         n <= 65 ? 'Зрілість' :
         n <= 75 ? 'Старість' :
         n <= 90 ? 'Довголіття' :
         n <= 122 ? 'Рекорд' :
         null;
}

console.log(ageClassification(-1)); // -1 : null
console.log(ageClassification(0)); // 0 : null
console.log(ageClassification(1)); // 1 : Дитинство
console.log(ageClassification(24)); // 24 : Дитинство
console.log(ageClassification(24.01)); // 24.01 : Молодість
console.log(ageClassification(44)); // 44 : Молодість
console.log(ageClassification(44.01)); // 44.01 : Зрілість
console.log(ageClassification(65)); // 65 : Зрілість
console.log(ageClassification(65.1)); // 65.1 : Старість
console.log(ageClassification(75)); // 75 : Старість
console.log(ageClassification(75.01)); // 75.01 : Довголіття
console.log(ageClassification(90)); // 90 : Довголіття
console.log(ageClassification(90.01)); // 90.01 : Рекорд
console.log(ageClassification(122)); // 122 : Рекорд
console.log(ageClassification(122.01)); // 122.01 : null
console.log(ageClassification(150)); // 150 : null

console.log('========================================================');

console.log('=========================#7=============================');

function oddFn(n) {
    let i = 1;
    let mus = [];

    while( i <= n ){
        
        if( i % 2 !== 0){
            mus.push(i);
        }
        i++;
    }

    return mus;
}

console.log(oddFn(10)) // [1, 3, 5, 7, 9]
console.log(oddFn(15)) // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)) // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

console.log('========================================================');

console.log('=========================#8=============================');

function mainFunc (a, b, callback){
    if (typeof callback !== 'function') {
        return false;
    }

    return callback(a,b);
}

function cbRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
    return num ** pow;
}

function cbAdd(a, b) {
    return a + b;
 }

console.log(mainFunc(2, 5, cbRandom)) // цілі числа в діапазоні 2..5
console.log(mainFunc(2, 5, cbPow)) // 32
console.log(mainFunc(2, 5, cbAdd)) // 7
console.log(mainFunc(2, 5, 'not a func')) // false

console.log('========================================================');