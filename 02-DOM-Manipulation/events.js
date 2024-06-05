/* 
	Events - an action that occurs when we do something, that takes as an input,
	and in response to the input it gives some output.
	e.g: Pressing keys on keyboard, Moving mouse
*/

/*  Event Listeners */

// addEventListener - Example 1
let paragraphElement = document.querySelector('p');

paragraphElement.addEventListener('click', function () {
  this.textContent = 'Clicked!';
});

// addEventListener - Example 2
let inputElement = document.querySelector('input');

inputElement.addEventListener('input', function (event) {
  console.log(event.target.value);
});
