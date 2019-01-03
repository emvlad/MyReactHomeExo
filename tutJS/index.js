
//comment:this is my first js to increment behavior

console.log('Hello worlds - js file');

//1:===== all primitives or value type  for variables ======
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
//==========================ARRAYS==========================================
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

//======================FUNCTIONS===================================
//C: Function () that an algorithme or logical order to produce action
// function with a name that contents a body statement that perform a task or calculate a value

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
          
//value argument variable declaration to call function
    let arg1 = 2;
    //call square(with a value argument)
    let sqr = square(arg1);
    console.log('The square of(' + arg1  + ') is: ' +  sqr);

    console.log('The square of(' + arg1  + ') is: ' +  square(arg1));

    //=================More functions ==========================
    //instances_variables_arguments ~ members or props
    let baseSalary =30000;
    let overtime =10;
    let rate =20;

    //1-calculate the wage with 3 input-parameters for the employee
    function calcSalary(baseSalary,overtime,rate){
        return baseSalary + (overtime*rate);
    }

    //call the function providing arguments to the parameters
    let salary = calcSalary(baseSalary,overtime,rate);
    console.log('Your salary calculated is: $' + salary );

    //2-create object employee with 3 key-members or props (encaptulation)
    // that groups (encapsulate) related members and functions together
    let  employee ={
        baseSalary :30000,
        overtime :10,
        rate :20,
        //inner function to calculate the this wage
        getWage : function(){
            return this.baseSalary + (this.overtime* this.rate);
        }
    }
    //The best function is this one without parameters but encaptulated members
    let payWag = employee.getWage();
    console.log('You get the following wage: $' + payWag );

// Encapsulation reduce complexity parameters
// Abstraction reduce the impact of change but show the essentials
// Inheritance eliminate redundant code
// Polymorphisme manyForms refactoring_tech to get rid of long switch/case statements

//================== CREATE OBJECTS =======================
//1: USING object literal
//create an object circle with properties or keys and one function memeber
const circle = {
 radius:1,
    location:{
        x:1,
        y:1
    },
 draw: function(){
     console.log('1-draw Object literal inner function');
    }
};
//access with dot notation
circle.draw();

//2:USING Factories rebuilder function = return object
// that function to build an OBJECT circle with properties or keys and one function memebr
//if an object has one or more methods that mean it has BEHAVIOR
//Behavior = do multiple different things like human.

function buildCircle (radius) {
    return {
        radius:1,
        drawee: function(){
         console.log('2-draw Return_Drawee Factoring_builder_Function');
        }
    
    }

}
//access with dot notation
//circle.drawee(); //error draw is not a function

//create a constant factCircle providing argument to the method
const factCircle = buildCircle(1);
factCircle.drawee(); 

//3:USING A CONSTRUCTOR FUNCTION with first letter Uppercase
//in order using 'this' reference and 'new' operator.
function Circle(radius){
   // console.log('showThis', this);
    //this:reference object of a function or a class to execute a piece of codes
    this.radius = radius;
    this.drawcor = function(){
        console.log('3-draw new constructor Function');
    }
    
}

const drawor = new Circle(1);
drawor.drawcor();

const cercle = new Circle(10);
//dot notation
cercle.location={x:1};
//brackets notation
cercle['location']={x:2};

//Notes:
//every object has a constructor property
// functions are objects
/*
const Circle1 = new Function('radius',` 
this.radius = radius;
    this.drawcor = function(){
        console.log('3-draw new constructor Function');
    }
`);

const circl1 = new Circle1(1);
*/
//lookUp method in a function
//1-the empty target the this in the current function
//Circle.call({},1) // same as const drawor = new Circle(1);

//2-apply
//Circle.apply({},[1]) //passing argument in array [1,2,3,...]


//log all the members
for(let propKey in drawor){
    console.log('All members:' + propKey);
}
for(let propKey in drawor){
   if(typeof drawor[propKey] !=='function')
   console.log('key in circle that not a function:' + propKey);
   console.log('key_value in Circle:' + drawor[propKey]);
}

//log all key-objects
const propKeys = Object.keys(drawor);
console.log('all keys: ' + propKeys);

//log existing key_prop named radius 
if('radius' in drawor){
    console.log('This props name is : radius');
}



function Cerclo(radius){
    
        //variable scope is part of the function where it's located
        this.radius=radius;
        //variable closure is part of all inner functions
        let defaultLocation = {x:0, y:0};

        //let computeOptimumLocation = function(factor){
        //....
   //   }

   this.getDefaultLocation = function(){
       return defaultLocation;
   }

    this.drawo = function(){
        //computeOptimumLocation(0.1);
        //defaultLocation
        //this.radius
        console.log('scope and closure' + this.drawo);
    };
    //more recommended
    Object.defineProperty(this,'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || value.y){
                alert ('Invalid value');

               // throw new Error('Invalid location.');
            }else{
                defaultLocation = value;
            }
            
         
        }
    });
}

const cerclo = new Cerclo(7);

cerclo.defaultLocation = 1;

//cerclo.getDefaultLocation(); //not recommanded
cerclo.drawo();

//============ GETTERS and SETTERS =================
const voiture={
    marque :'Toyota',
    model:'Corolla',
    get fullDescription(){
        return `${voiture.marque} ${voiture.model}`
    },
    set fullDescription(param){
        const pieces = param.split(' ');
        this.marque =pieces [0];
        this.model = pieces[1];
    }

};

console.log(' Voiture: ' + voiture.marque);
console.log(' Voiture: ' + voiture.fullDescription);

//modify description
voiture.fullDescription = 'Mazda 626';
console.log(' Voiture: ' + voiture.marque);
console.log(' Voiture: ' + voiture.fullDescription);

//============== clone object =============

//1:old approach
// const car ={};
// for (let key in voiture){
//     car[key] = voiture[key];
// }
//2:equivalent to the code above to clone object
//const car = Object.assign({}, voiture);

//3: spread operator...
const car ={...voiture}
console.log('Clone object:' + car.fullDescription)