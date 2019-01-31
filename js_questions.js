// /*-----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
  const allElements = document.body.getElementsByTagName("*");
  
  for(let i = 0; i< allElements.length; i++) {

    const usaText = allElements.item(i).innerText;

    if(usaText === "USA") {
        console.log(usaText);
    }
  }
}
  
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
  //assume there is only one table and it holds sales info
  let salesTable = document.getElementsByTagName("tbody")[0];
  let salesRow = salesTable.children;
  let numSales = salesRow.length;

  for(let i = 1; i < numSales; i++) {
    let name = salesRow[i].children[0].innerText;
    let department = salesRow[i].children[1].innerText;
    if(department === "Sales") {
      console.log(name,department);
    }
  }
}
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() { 
  let anchorElements = document.getElementsByTagName("a"); 
  for(element of anchorElements) {
    spansInElement = element.getElementsByTagName("span");
    for(span of spansInElement) {
      span && console.log(span.innerText)
    }
  }
}
  
// 4. Hobbies
// Define function getHobbies
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies() {
  skillsElement = document.getElementsByName("skills")[0];
  for(skill of skillsElement) { 
    if (skill.getAttribute("selected")) {
      console.log(skill.getAttribute("value"), skill.innerText)
    }
  }
}

  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {

}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>
function updateSumElement() {
  let valNum1 = Number(document.getElementById("num1").value);
  let valNum2 = Number(document.getElementById("num2").value);

  console.log(valNum1, ":", valNum2)
  let total = valNum1 + valNum2;
  let result = (total===0)?0:(total || "Cannot add");
  document.getElementById("sum").innerText = result; 
}
// Define onchange event handler
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

document.getElementById("num1")
  .addEventListener("change", updateSumElement);

document.getElementById("num2")
  .addEventListener("change", updateSumElement);

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

document.getElementsByName("skills")[0]
  .addEventListener("change", (event) => {
    alert("Are you sure " + event.target.value + " is one of your skills?")
  });

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
function colorEventFactory() {
  let color = "";
  return (event) => {
    color && alert("so you like "+event.target.value+" more than "+color);
    color = event.target.value;
  }
}

let colorRadioButtons = document.getElementsByName("favoriteColor");
let colorListener = colorEventFactory();
for(rb of colorRadioButtons) {
  rb.addEventListener("click", colorListener)
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).


// */