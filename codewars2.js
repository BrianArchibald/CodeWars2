
// Take 2 strings s1 and s2 including only letters from ato z.
//  Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2. #Examples: 
// ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

or

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

or 

function longest(s1, s2) {
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}

///////////////////////////////////////////////////////////

// Give you a function ```animal```, accept 1 parameter:```obj``` like this:
// ```
// {name:"dog",legs:4,color:"white"}
// ``` 
// and return a string like this:

// "This white dog has 4 legs."


function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

////////////////////////////////////////////////////
Coding in function ```trueOrFalse```, function accept 1  parameters:```val```, 
try to use the conditional statement if...else, 
if ```val``` value is false (val==false or it can convert to false),
 should return a string "false", if not, return a string "true".
When you have finished the work, click "Run Tests" to see if your code is working properly.
In the end, click "Submit" to submit your code pass this kata.


function trueOrFalse(val){
  return Boolean(val).toString();
}

////////////////////////////////////////////////////////

Complete function saleHotdogs/SaleHotDogs, function accept 1 parameters:n, 
n is the number of customers to buy hotdogs, 
different numbers have different prices (refer to the following table), 
return a number that the customer need to pay how much money.
+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+
You can use if..else or ternary operator to complete it.
When you have finished the work, click "Run Tests" to see if your code is working properly.
In the end, click "Submit" to submit your code pass this kata.


function saleHotdogs(n){
  return n*(n<5?100:n<10?95:90);
}

/////////////////////////////////////////////////////////////////

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
  return "Even";
  } else {
  return "Odd";
  }
}

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

//////////////////////////////

FInd the opposite number ex. -1 , 1     4, -4

function opposite(number) {
  return(-number);
}

/////////////////////////////////////////////////////////////////

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"



function repeatStr (n, s) {
  return s.repeat(n);
}

///////////////////////////////////////////////////

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
 return str.slice(1, -1);

};

/////////////////////////////////////////////////////

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0


function makeNegative(num) {
  return num < 0 ? num : -num;
}

or 

function makeNegative(num) {
  return -Math.abs(num);

///////////////////////////////////////////////////////

Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

or 

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

///////////////////////////////////////////////////////
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

function digitize(n){
  return (n + '').split('').map(Number).reverse();
}
///////////////////////////////////////////////////////////////

Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
// \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
  return x.replace(/\s+/g, '');
  
}
/////////////////////////////////

function noSpace(x){
// \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
  return x.replace(/\s+/g, '');
  
}
//////////////////////////

Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
////////////////////////////////////

Use destructuring to obtain the length of the input string str, and assign the length to len in line.

function getLength(str) {

  "use strict";

  // change code below this line

  const {length: len} = str;    // get field length and assign it to len  

  return len;

}

//////////////////////////////////////


Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples:

basicOp('+', 4, 7)         // Output: 11

basicOp('-', 15, 18)       // Output: -3

basicOp('*', 5, 5)         // Output: 25

basicOp('/', 49, 7)        // Output: 7

 

function basicOp(operation, value1, value2) {

    switch (operation) {

        case '+':

            return value1 + value2;

        case '-':

            return value1 - value2;

        case '*':

            return value1 * value2;

        case '/':

            return value1 / value2;

        default:

            return 0;

    }

}
or
function basicOp(o, a, b) {

  return eval(a+o+b);

}
////////////////////////////////////////////
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the

second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

 

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    var positive = 0;
    var negative = 0;
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    return [positive, negative];
}
/////////////////////////////////////////