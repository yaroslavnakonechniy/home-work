console.log('===================#1==========================================================================');
function createTestList() {
  document.body.innerHTML = `
    <button id="myButton">click</button>
    <ul id="testList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    `
}

createTestList();

function handleButtonClick(buttonId, message) {
  const button = document.getElementById(buttonId);

  button.addEventListener('click', () =>{
    console.log(message);
  });
}

handleButtonClick('myButton', 'Button clicked!'); 

console.log('===============================================================================================');

console.log('==================#2=====================');

function trackMousePosition() {
  document.addEventListener("mousemove", (event) => {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  });
}

trackMousePosition();

console.log('=======================================');

console.log('==================#3=====================');


function setupEventDelegation(selector) {
  const list = document.getElementById('testList');

  list.addEventListener('click', (event) => {
    if(event.target.tagName === "LI"){
      console.log(`Клікнуто на ${event.target.textContent}`);
    }
  })

}

setupEventDelegation('#testList')
console.log('=======================================');