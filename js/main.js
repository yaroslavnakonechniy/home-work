
console.log("====================#1=====================");
function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const exampleArray = [1, 2, 3, 4, 5]
const sum = sumArray(exampleArray)
console.log('Сума елементів масиву:', sum) // Виведення суми
console.log("=========================================");
console.log("====================#2=====================");

function doubleArrayElements(numbers) {
  return numbers.map((number) => number * 2);
}

const exampleArray2 = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayElements(exampleArray2)
console.log('Подвоєні елементи масиву:', doubledArray) // Виведення подвоєних елементів

console.log("=========================================");
console.log("====================#3=====================");
/*
 * #3
 *
 * Розробити клас `SkillsManager`, що відповідає за управління списком навичок. Клас повинен включати:
 * 1. Конструктор:
 * - Ініціалізує порожній масив `skills`, який буде використовуватися для зберігання навичок.
 * 2. Метод `addSkill(skill)`:
 * - Приймає один аргумент `skill` (рядок).
 * - Перевіряє, чи аргумент є рядком і має мінімум два символи.
 * - Якщо умови виконані, додає `skill` до масиву `skills` і повертає додану навичку.
 * - Якщо умови не виконані (навичка не є рядком або має менше двох символів), повертає `null`.
 * 3. Метод `getAllSkills()`:
 *   - Повертає поточний масив усіх навичок, збережених у класі.
 *
 * Загальні вимоги:
 * - Клас має бути модульним і здатним до використання в інших частинах програми, тому він повинен бути експортований.
 * - Клас має забезпечувати легке управління навичками, включаючи додавання нових навичок та отримання списку всіх наявних навичок.
 * - Код має бути написаний з урахуванням принципів чистого коду, забезпечуючи читабельність та легкість підтримки.
*/

class SkillsManager {
  constructor(skills = []){
    this.skills = skills;
  }

  addSkill(skill){
    if(typeof(skill) === 'string' && skill.length >= 2){
      this.skills.push(skill);
      return skill;
    }else{
      return null;
    }
  }

  getAllSkills(){
    return this.skills;
  }
}

const skillsManager = new SkillsManager()
console.log(skillsManager.addSkill('JavaScript'))
console.log(skillsManager.addSkill('C'))
console.log(skillsManager.addSkill('CSS'))
console.log(skillsManager.addSkill('C'))
console.log(skillsManager.getAllSkills())
console.log("=========================================");

console.log("===========================#4==================");

function DateCalculator(initialDate) {

  const date = new Date(initialDate);

  this.addDays = function(days) {
    
    date.setDate(date.getDate() + days);
    return this;
  }

  this.subtractDays = function(days) {
    
    date.setDate(date.getDate() - days);
    return this;
  }

  this.getResult = function() {
    return date.toISOString().split('T')[0];
  }
}

const dateCalculator = new DateCalculator('2023-01-01')
dateCalculator.addDays(5)
console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів

dateCalculator.subtractDays(3)
console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів
console.log("==========================================");