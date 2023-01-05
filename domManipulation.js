## Manipulating the DOM with JavaScript

// Creating, adding and removing:
document .createElement ( 'HTMLTag'); // Create an element
document.body.append(myElement); // Insert first
document.body.prepend(myElement); // Insert last
parentElement. insertBefore(newElement, existingElement); // Insert before 
element.remove(); // Remove element

// Content setting:
element.innerHTML = "HTML content"; // Set HTML content inside element
element. innerText = "text content"; // Set text (preserves formatting)
element.textContent = "text content"; // Set text (ignores formatting)

// Working with attributes:
element.getAttribute( 'attribute'); // Returns attribute value
element.removeAttribute( 'attribute'); // Removes attribute
element.setAttribute( 'attribute', 'value'); // Sets attribute with value
element.id; // Returns element id
element.id = 'value'; // Sets element id
element.className = 'list'; // Set new class list
element.classList; // Returns items in class list in array-like format
element.classList.add('classItem'); // Add item to class list
element.classList.remove('classItem'); // Remove item from class list
element.classList.toggle( 'classItem'); // Toggle item in class list

// Editing styles:
getComputedStyle(myElement); // Returns all styling of an element
element.style = 'CSS'; // Sets element style attribute
element.style.styleAttribute = 'value'; // Sets individual style