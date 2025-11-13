console.log('=======================#1======================');
class CalorieCalculator {
  constructor() {
    this.product = new Map();
  }

  addProduct(productName, productCalories) {
    this.product.set(productName, productCalories);
  }

  getProductCalories(productName) {
    if(this.product.get(productName))
        return this.product.get(productName);
    else return 'Product not found';
  }

  removeProduct(productName) {
    return this.product.delete(productName);
  }
}

 const calorieCalculator = new CalorieCalculator()
 calorieCalculator.addProduct('Apple', 52)
 calorieCalculator.addProduct('Banana', 89)

 console.log(calorieCalculator.getProductCalories('Apple')) // 52
 console.log(calorieCalculator.getProductCalories('Banana')) // 89

 calorieCalculator.removeProduct('Apple')
 console.log(calorieCalculator.getProductCalories('Apple')) // Product not found
console.log('=============================================');

console.log('=======================#2======================');
class UniqueUsernames {
  constructor() {
    this.user = new Set();
  }

  addUser(username) {
    this.user.add(username);
  }

  exists(username) {
    return this.user.has(username);
  }

  count() {
    return this.user.size;
  }
}

// Демонстрація використання
 const uniqueUsernames = new UniqueUsernames()
 uniqueUsernames.addUser('john_doe')
 uniqueUsernames.addUser('jane_doe')
 uniqueUsernames.addUser('john_doe') // Ця дія не змінить набір, оскільки 'john_doe' вже існує

 console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`) // true
 console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`) // 2
 console.log('=============================================');