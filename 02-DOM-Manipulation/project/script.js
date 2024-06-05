// 1. Select the element on which the event will occur
const inputElement = document.querySelector('#product-name');
const spanElement = document.querySelector('#remaining-chars');

// 2. Add the event listener
inputElement.addEventListener('input', function (event) {
  const totalCharacters = event.target.value.length;
  const remainingCharacters = event.target.maxLength - totalCharacters;

  spanElement.textContent = remainingCharacters;

  // 3. Change styling
  if (remainingCharacters <= 10) {
    inputElement.classList.add('warning');
    spanElement.classList.add('warning');
  } else {
    inputElement.classList.remove('warning');
    spanElement.classList.remove('warning');
  }
});
