console.log('=========================#1=============================');

function getCounter(n){
    
    (typeof(n) === 'number' ) ? count = n : count = 0;
    
    return function (n){
        if(typeof(n) === 'number') {
            count = n;
        }

        return count++;
    }
}

const counter = getCounter();
console.log(counter(-5))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter(100)) // 100
console.log(counter()) // 101
console.log(counter()) // 102
console.log(counter(500)) // 500
console.log(counter()) // 501
console.log(counter()) // 502
console.log(counter(0)) // 0
console.log(counter()) // 0
console.log(counter()) // 1


console.log('======================================================');

console.log('=========================#2=============================');

function getCounterFactory (number) {
    let count;

    (typeof(number) === 'number' ) ? count = number : count = 0;

    function value(number){
        
        if(typeof(number) === 'number') {
            return count = number;
        }
        return count;
    } 

    function increment () {
        count++;
        return count;
    }

    function decrement () {
        count--;
        return count;
    }

    return {value, increment, decrement};
}

const counterFactory = getCounterFactory ();

console.log(counterFactory.value()) // 0
counterFactory.increment()
counterFactory.increment()
counterFactory.increment()
console.log(counterFactory.value()) // 3
counterFactory.decrement()
counterFactory.decrement()
console.log(counterFactory.value()) // 1
console.log(counterFactory.value(100)) // 100
counterFactory.decrement()
console.log(counterFactory.value()) // 99
console.log(counterFactory.value(200)) // 200
counterFactory.increment()
console.log(counterFactory.value()) // 201


console.log('======================================================'); 

console.log('========================#3==============================');
function myPow (a, b, myPrint){

    function pow(a1, b1){
        if(b1 === 0) return 1;
        if (b1 < 0) return 1 / pow(a1, -b1);
        if (b1 === 1) return a1;
        return a1 * pow(a1, b1-1);
    }

    const result = pow(a,b);
    return myPrint(a, b, result); 
}

function myPrint (a, b, res){
    return `${a}^${b} = ${res}`;
}

//console.log(myPrint(2,6, 122));

//const myPrint = () => {}
//const myPow = () => {}

console.log(myPow(3, 4, myPrint)) // 3^4=81
console.log(myPow(2, 3, myPrint)) // 2^3=8
console.log(myPow(2, 0, myPrint)) // 2^0=1
console.log(myPow(2, -2, myPrint)) // 2^-2=0.25

console.log('=======================================================');

console.log('========================#4==============================');

function myMax (arr){
     return Math.max.apply(null, arr);
}

const list = [12, 23, 100, 34, 56, 9, 233];

console.log(myMax(list)); // 233

console.log('=======================================================');

console.log('========================#5==============================');

function myMul(a, b) {
  return a * b;
}

const myDouble = myMul.bind(null, 2);
const myTriple = myMul.bind(null, 3);

console.log(myDouble(3)) // = myMul(2, 3) = 6
console.log(myDouble(4)) // = myMul(2, 4) = 8
console.log(myDouble(5)) // = myMul(2, 5) = 10

console.log(myTriple(3)) // = myMul(3, 3) = 9
console.log(myTriple(4)) // = myMul(3, 4) = 12
console.log(myTriple(5)) // = myMul(3, 5) = 15

console.log('=======================================================');