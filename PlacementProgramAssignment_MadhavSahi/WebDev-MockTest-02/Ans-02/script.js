const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const display = document.getElementById('display');

function handleInput() {
  const inputValue = input.value;
  
  if (inputValue.trim() !== '') {
    const newElement = document.createElement('p');
    newElement.textContent = inputValue;
    display.appendChild(newElement);
    input.value = '';
  }
}

submitBtn.addEventListener('click', handleInput);

input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    handleInput();
  }
});
