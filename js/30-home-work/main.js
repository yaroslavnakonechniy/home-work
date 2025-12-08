function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|ua)$/;

  return pattern.test(email);
}
/////////////////////////////isValidEmail//////////////////////////////
console.log('example@example.com', isValidEmail('example@example.com')) // Повинно вивести: true
console.log('example@example.ua', isValidEmail('example@example.ua'))

console.log('example.example.com', isValidEmail('example.example.com'))// Повинно вивести: false
console.log('example@example.c', isValidEmail('example@example.c'))
console.log('invalid-email', isValidEmail('invalid-email'))       
console.log('empty string', isValidEmail(''))  


function isValidUrl(url) {
  const pattern = /^(https?:\/\/)www\.[a-zA-Z0-9-]+\.(com|ua)$/;

  return pattern .test(url);
}
/////////////////////////////isValidUrl//////////////////////////////
console.log('https://.example.com', isValidUrl('https://.example.com'))             // Повинно вивести: false
console.log('https://www.example.co', isValidUrl('https://www.example.co')) 
console.log('https:/www.example.com', isValidUrl('https:/www.example.com')) 
console.log('invalid-url', isValidUrl('invalid-url')) 
console.log('empty string', isValidUrl('')) 
console.log('https://www.example.com', isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log('https://www.example.ua', isValidUrl('https://www.example.ua'))
console.log('http://www.example.com', isValidUrl('http://www.example.com'))
console.log('http://www.example.ua', isValidUrl('http://www.example.ua'))



module.exports = {isValidEmail, isValidUrl}