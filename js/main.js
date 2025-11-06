console.log('=========================curriedAdd=============================');

function curriedAdd (a) {
    return function addFirst(b) {
        return function addSecond(c) {
            return a + b + c;
        }
    }
}

const addFirst = curriedAdd(1);
const addSecond = addFirst(2);
const result = addSecond(3); // Повинно повернути 6
console.log('Result:', result);

console.log('======================================================');

console.log('=========================curriedDomain=============================')
function curriedDomain(protocol) {
    return function protocolSetter (domainName) {
        return function domainNameSetter (tld) {
            return `${protocol}://${domainName}.${tld}`;
        }
    }
}

const protocolSetter = curriedDomain('https');
const domainNameSetter = protocolSetter('example');
const fullDomain = domainNameSetter('com');
console.log('Result:', fullDomain);

console.log('========================================================');

console.log('=========================modifyFunction=============================');

function modifyFunction (originalFunction, multiplier) {
    return function (num) {
        return multiplier * originalFunction(num);

    }
}

function originalFunction (num) {
    return num * num ;
}

const modifiedFunc = modifyFunction(originalFunction, 3)
console.log('Original function output for 4:', originalFunction(4)) // Повинно вивести 16
console.log('Modified function output for 4:', modifiedFunc(4)) // Повинно вивести 48 (16 * 3)

console.log('======================================================');

console.log('========================outerFunction==============================');

function outerFunction(arg1) {
  return function innerFunction(arg2) {
    return function deepInnerFunction(arg3) {
      return arg1 * arg2 * arg3;
    }
  }
}

console.log(outerFunction(2)(3)(4));