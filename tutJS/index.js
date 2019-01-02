
//comment:this is my first js to increment behavior

console.log('Hello worlds - js file');

//1:===== all primitives or value type ======
let lastName ='Vladimir'; //String literal
let age = 30 // Numbre literal
let isOk = true; //Boolean literal
let firstName = undefined; //Undefined literal
let pays = null; //null literal to clear the value of the variable
let interestRate = 0.3;
interestRate =0.4;

//constant won't be changed
const savingInterest = 0.5;
//errors:savingInterest = 0.6;

console.log('Number:', age);
console.log('Boolean:', isOk);
console.log('First Name- unDef:', firstName);
console.log('String:', lastName);
console.log('Pays:', pays);

console.log('variable:', interestRate);
console.log('constant:', savingInterest);

//2:================ Dynamic or Static =============================
//3:================ Réference types ==============
//3.1: Object ={curly brace for object literal 
//              - within key value pairs}
//3.2: Arrays [];
//3.3: Function();

//exercices:
//A-Object (s): content value when putting all the keys or variables 
//or properties inside an object ex: person or country

let country = { city:'New York', population:'20000', language:'English'

};

let person = { fullName:'ChrisVlad', ages:'52'

};

console.log('This is an object we called PERSON', person);

//Access the value of properties in object(s): Dot notation - Bracket notation

//1: Dot notation
person.fullName = 'HemsChris'; // modify fullName

console.log('The value of the props FullName is:', person.fullName);

//2: Bracket notation with the 'string target' property
let old = person[ 'ages'] = 28; // modify ages
console.log('The value of the props ages using bracket [] is', old);

let selected = 'ages'
person[selected] = 26; // modify ages
let brackage = person[selected];
console.log('The value of the props ages using bracket [] is', brackage ,'ans');

//B: Arrays [] that content value at indice_reference
//Note: that can content different type of values is also an object in JS.
//Useful to represent a list of items.
let selectedColrs =[]; //empty arrays literal
let selectedColors =['red', 'blue']; //initial arrays literal

console.log('The content value of the current Array ', selectedColors);
console.log('The number of value in the current Array or it length is: ', selectedColors.length);

//add a value content
selectedColors[2]='green';
selectedColors[3]= 9;
console.log('The content value of the current Array ', selectedColors);
console.log('The content value at the first indice[0] of the current Array is: ', selectedColors[0]);
console.log('The number of value in the current Array or it length is: ', selectedColors.length);


//C: Function () that an algorithme or logical order to produce action
// function with a name contents a body statement that perform a task or calculate a value

//C1: Performing a task or display something
function greet(){
//the logic (statement) of this function is to display a greeting on the console
console.log('Hello greet function with no parameter');

}
 //call the function with no value argument
greet();

//create function with parameters_property_waiting for value_argument
function greeting(firstName, lastName){

    // function can have input parameter   
    console.log('Hello Mr.' + firstName + ' ' + lastName);
    
    }
    
    //call the function with values_argument_supply into the parameters
    greeting('John', 'Carpenter');
    greeting('Laure', 'Sphinx');


    //C2: Calculate value (square of a number)

    function square(number){

        return number * number
         
          }
          
          //value argument variable declaration and call function
          let arg1 = 2;
          //call square(with a value argument)
          let sqr = square(arg1);
          console.log('The square of(' + arg1  + ') is: ' +  sqr);

          console.log('The square of(' + arg1  + ') is: ' +  square(arg1));

  





