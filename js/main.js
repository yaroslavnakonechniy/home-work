console.log('===================#1====================');
function createDomElement(tagName, textContent, container) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  container.append(element);
  return  element;
}

const container = document.body // В якості прикладу використовуємо body як контейнер
console.log(createDomElement('p', 'This paragraph has been added to the specified container.', container));
console.log('=======================================');

console.log('==================#2=====================');

function setUserInfoCookie(key, value) {
  const cookie = `${key}=${value}`;
  const date = new Date(Date.now() + 10000).toUTCString();
  document.cookie = `userInfo=${cookie}; expires=${date}; path=/`;

  console.log(`Cookie userInfo збережено: ${cookie} (10 сек)`);
  console.log(document.cookie);
}

setUserInfoCookie('language', 'en');
console.log('Після встановлення:', document.cookie);

console.log('=======================================');

console.log('==================#3=====================');
function saveUserInfo(key, value) {
  sessionStorage.setItem(key, value);
  console.log(`Saved ${key}: ${value}`);
}

function getUserInfo(key) {
  const sessionData = sessionStorage.getItem(key);
  console.log('Збережені тимчасові дані:', sessionData);
  return sessionData;
}

saveUserInfo('username', 'JohnDoe');
console.log(getUserInfo('username')); // Виведе: JohnDoe
console.log('=======================================');
