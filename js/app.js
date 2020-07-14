console.log("linked");

//1. Watch the following video that review the spread operator. The spread operator will be very useful in the upcoming vanilla JS exercises, and for React.


//2. Watch this video on destructuring. We will come across destructing a few times a week for the next several weeks, and it will help you to know this concept. 


//3. Let's review objects. Declare three new variables that have objects as their values. Each object should have /at least/ three property/value pairs. Each object  should have at least one string, one array, and one number  in the value of a property/value pair.


var person = {
    "name": "DJ",
    "age": 28,
    "nicknames": ["dork", "bigger dork"]
}
var catergories = {
    "color": "red",
    "year": 2020,
    "foods": ["macaroni", "cheese"]
}
var variables = {
    "category": "dunno",
    "number" : 1,
    "stuff": ["volcanos", "space"]
}  

console.log(variables.stuff);
console.log(person.name); 
console.log(variables.number);
//4. Use dot notation or bracket notation to console.log a value from each object you created in step 3.


//5. Create a function that takes an array as an argument. That function  should then console.log every value in the array using a for-loop. Then call the function on an array. The array can be any array of your making or choosing.

const takeAnArrayAsAnArgument = [1,2,3,4,5,9]; {

    for (let i = 0; i < takeAnArrayAsAnArgument.length; i++) 
    console.log(takeAnArrayAsAnArgument[i]); }

