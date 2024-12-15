// ————————————————————————————————————————————————————————————
// 1.
// selectors and initial variables
// ————————————————————————————————————————————————————————————
/*create key variables for Todo List to reference HTML elements*/
const taskinput = document.getElementById('taskInput');
taskinput.style.width = "20vw";     
taskinput.style.height = "5vh";

const addTaskButton = document.getElementById('addTask');
addTaskButton.style.width = "6vw";
addTaskButton.style.height = "5.5vh";

const taskList = document.getElementById('taskList');
const myHeading = document.querySelector("h1");
myHeading.textContent = "John's To-Do List";
myHeading.style.color = "darkblue";
myHeading.style.fontSize = "3em";
myHeading.addEventListener("click", function(){
    alert("You clicked the heading!");
    myHeading.style.color = "white";
    myHeading.style.backgroundColor = "darkblue";
});

const heading3 = document.querySelector('h3');
heading3.textContent = "Input";
heading3.style.fontSize = "1.5em";

// ————————————————————————————————————————————————————————————
// 2.
// create event listener to add item to the list
// ————————————————————————————————————————————————————————————
/*create event listener for button to alert user that button has been clicked*/
//addTaskButton.addEventListener('click', function() {                      
//   alert("You clicked the Button!");
//   document.querySelector("button").style.backgroundColor = "lightgreen";
//  document.querySelector("button").textContent = "Save";
//});
//console.log(alert);

/*Add an event listener to the button to add a task to the list*/ 
addTaskButton.addEventListener('click', function () {                                   
    const text = taskInput.value.trim(); // store text into variable + remove the redundant whitespaces
    if (text !== '') { // Only add if text has been entered into input field
        addTask(text);
        taskInput.value = ''; // input field reset
    }
});
// ————————————————————————————————————————————————————————————
// 3. & 4.
// create function to add input into the output list
// ————————————————————————————————————————————————————————————
/* Define function to add input text to the list as a argument*/
function addTask(text) {
    const taskElement = document.createElement('li'); 
    taskElement.textContent = text; // add text to the list
    taskElement.style.fontSize = "1.2em";
// ————————————————————————————————————————————————————————————
// 4.
// create event handler to handle buttons
// ————————————————————————————————————————————————————————————
/*create a button to mark the task as done*/
let doneButton = document.createElement('button');
doneButton.textContent = 'Done';
doneButton.className = 'done';
taskElement.appendChild(doneButton);
doneButton.style.width = "4vw";
doneButton.style.height = "4.5vh";

/*create a button to delete the task*/
let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = 'delete';
deleteButton.style.width = "4vw";
deleteButton.style.height = "4.5vh";


taskElement.appendChild(deleteButton);  // add the delete button to the list when a task is added

taskList.appendChild(taskElement);  // add the task to the list when a task is added
}

/*add event listener to the button to add the task to the list*/
taskList.addEventListener('click', function(event) {
    if (event.target.className == "done") { 
        event.target.parentElement.classList.toggle('completed'); // toggle the class completed when the done button is clicked + mark the task   
        event.target.style.backgroundColor = "lightgreen"; 
    }
    if (event.target.className == "delete") {
        event.target.parentElement.remove(); // remove the task from the list when the delete button is clicked
    }
 
});


