/* DOM- the data representation of the parsed HTML code */

// Window object - related to active browser window / tab
console.log(window);

// Document object - related to the loaded website content
console.dir(window.document);

/* DOM Properties */
document.body.firstElementChild;

document.body.children;

/* DOM Methods */

// getElementById
document.getElementById('external-link');

// getElementByClass
document.getElementsByClassName('footer');

// getElementByTag
document.getElementsByTagName('h1');

// querySelector
document.querySelector('#external-link');

// querySelectorAll
document.querySelectorAll('h1');

/*  Add an Element */

// 1. Create the new element
let newAnchor = document.createElement('a');
newAnchor.href = 'https://www.google.com';
newAnchor.textContent = 'This leads to google';

// 2. Get access to parent element
let firstParagraph = document.querySelector('p');

// 3. Insert the new element into parent element
firstParagraph.append(newAnchor);

/* Delete an Element */

// 1. Select element that would be removed
let firstAnchor = document.querySelector('a');

// 2. Use remove method
firstAnchor.remove();

/*  Move an Element */

// 1. Select the element
let p1 = document.querySelector('p');

// 2. Actually move it
p1.parentElement.append(p1);

/* Modifying Content */

// textContent - Only text can be added
p1.textContent = 'This is a new paragraph';

// innerHTML - Mixture of text & element
p1.innerHTML = 'This is a link of <a href="https://www.google.com">Google</a>';
