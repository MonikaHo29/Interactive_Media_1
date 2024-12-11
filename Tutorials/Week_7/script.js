console.log("Hello World! You're found me again!");

//single line comment
/* 
    multi
    line 
    comment
*/


//FUNCTIONS
//Create function --> DECLERATION: backCookie = is the name of the function, () = is the parameter, {} = is the body of the function
function bakeCookie(){
    /*
        this include a set of instructions to bake a cookie
    */
}

//Call the function
bakeCookie();

//EXAMPLE 1 --> print out on console
function sayHello(){
    console.log("Hello, I'm Monika");
    console.log("I'm not a web developer");
}
sayHello();

// EXAMPLE 2.1 --> calculate sum of two numbers
/*function calculateSum(num1, num2){
    console.log(num1 + num2);
}
calculateSum(5, 10); //writing the value of the parameter
*/
// EXAMPLE 2.2 --> return the sum, give out the value
function calculateSum(num1, num2){
    return num1 + num2;
}

//EXAMPLE 2.3 --> console.log the sum
function tellSum(sum){
    console.log("And the answer is.....")
    console.log(sum);
}
let s = calculateSum(5, 10); //define the value of the parameter
tellSum(s); //call the function with the defined value


//VARIABLES --> you can't use numbers in the beginning of the variable name
let myVariable = "Hello, I'm a variable";
console.log(myVariable);

//different data types, create a variable with let 
let humanName; //define 1 variable at a
let x, y, sum, foodName, isTrue; //define multiple variables at once

//Initialize the variable, recall the variable
humanName = "John";     //data type: string = text
foodName = "Pizza";     //data type: string = text
x = 1;                  //data type: number = integer (whole number)
y = -0.5;               //data type: number = float (decimal)
isTrue = true;          //data type: boolean = true or false


//OPERATORS
//arithmetic operators
/*
    =  assignment --> assign value means to give a value to a variable not to compare/equal
    +  addition
    -  subtraction
    *  multiplication
    /  division
    %  modulo (remainder)
*/
sum = 3 + 4; 
console.log(sum);
sum = x + y;
console.log(sum);

console.log(humanName + "like to eat" + foodName);
console.log(humanName, "like to eat", foodName);
sum = 10 % 3;
console.log(sum); //1 --> 10 divided by 3 is 3 with a remainder of 1

//increment and decrement operators
/*
    += increment
    -= decrement
    *=
    /=
    %=
    ++
    -- 
*/
x = 5;

x ++; //x = x + 1 = 6
x --; //x = x - 1 = 5
x += 5; //x = x + 5 = 10
x -= 2; //x = x - 5 = 3
x *= 3; //x = x * 3 = 15
x /= 6; //x = x / 6 = 2.5
console.log(x); 

//conparison operators
/*
    ==  equal to
    !=  not equal to
    >   greater than
    <   less than
    >=  greater than or equal to
    <=  less than or equal to
*/
let a = 3;
let b = 10;
console.log(a == b); //false


// TYPE OF VARIABLES
/*
    let, const, var
    let, var = variable 
    cons = constant
*/
let myVariable2 = "Hello, I'm a variable2"
myVariable2 = "Hi!";
console.log(myVariable2);
const myConstant = "world!"; // >>you can't declare a constant without a value!

/*myConstant = "Earth";
console.log(myConstant); //error, you can't change the value of a constant*/

/*Ex. wehn to use let and when const
    let = when you want to change the value of the variable --> time, score, etc.
    const = when you don't want to change the value of the variable --> timezone, pi, etc.
*/


//DOCUMENT OBJECT MODEL (DOM) --> with the help of DOM, you can manipulate the HTML and CSS of a webpage
//document = the webpage itself

//print out the document objects
console.log("This adress the document object" + document); 
console.log("This adress the body object" + document.querySelector("body")); 
console.log("This adress the h1 object" + document.querySelector("h1")); 
// shoten the readressing of the document object
const myHeading = document.querySelector("h1");
console.log(myHeading);
//modify the constant of the h1 element
myHeading.textContent = "Hello, It's Christmas";
//modyfy the tag of the h1 element
//myHeading.outerHTML = "<h2>Hello, I'm the new constant, again!</h2>";
//modify the style of the h1 element
myHeading.style.color = "red";
myHeading.style.backgroundColor = "green";
myHeading.style.fontSize = "50px";


//EVENTS / EVENT LISTENERS / EVENT HANDLERS

//create an event listener, click event --> make an alert when the h1 element is clicked, the color of the h1 element changes to blue
myHeading.addEventListener("click", function(){
    alert("You clicked the heading!");
    myHeading.style.color = "blue";
});
//create an event listener, mouseover event --> make an alert when the h1 element is clicked, the color of the body element changes to yellow
document.querySelector("body").addEventListener("mousedown", function(){
    alert("You clicked the body!");
    document.querySelector("body").style.backgroundColor = "yellow";
});