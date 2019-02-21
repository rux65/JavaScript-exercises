console.log("hallo world from node.js")

var number=5; // in line comment

var a; //  this is declaring a variable
var b=2; // this is assigning a variable 

var firstName="ada"
console.log (firstName.length)
console.log(firstName[firstName.length-1]);

function wordBlanks(myNoun, myAdj, myVerb, myAdv){
	var result="";
	result= "The "+myAdj+" " + myNoun+ " " + myVerb+ " to the store "+myAdv+".";
	return result;
}

console.log(wordBlanks("dog","big","ran", "quickly"))

function nextInLine(arr, item){
	// your code here
	arr.push(item) // this adds the item at the end

	return arr.shift(); // this removes the first item and returns it
	
}

var testArr=[1,2,3,4,5];

console.log("before "+JSON.stringify(testArr))
// this shows the string before the array
console.log(nextInLine(testArr,6));
console.log("after: "+JSON.stringify(testArr));
// this one after



// this one is weird
//Object.feeze - is a method to not allow data to be changed 

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

  Object.freeze(MATH_CONSTANTS);
  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI) // returns 3.14 but throws some errors
// could be because of TRY


// arrow funtions - where function is replaces by =>
// arguments are still kept in the parantheses
const myConcat =(arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));


//celsius to farenheit
function convertToF(celsius) {
  
  let fahrenheit = celsius*9/5+32;
  return fahrenheit;
}

convertToF(30);

// they say that in SE6 there is a class sybtax but to not be confused with OOP
// it is only a sintax

// we use a constructor function to initiate an object
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

//the class sybtax replaces to constructor function creation


class SpaceShuttle2 {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus2 = new SpaceShuttle2('Jupiter2');

console.log(zeus.targetPlanet, zeus2.targetPlanet)
// prints Jupiter, Jupiter1 
// remember OOP in python define __init__ and self.name=name
// the same


// below example 3
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor (name){
      this.name=name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'


// exercise another
function reverseString(str) {
  let i = str.length-1
  let str2=""
  while(i>=0){
    str2=str2+str[i]
    i--;
  }
  return str2;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));


