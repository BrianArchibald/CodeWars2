
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
/////////////////////////////////////////////////////////////////////////////////

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, 
which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  return target === str.substr(str.length - target.length, str.length);
}

//////////////////////////////////////////////

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test

(second argument). If no element passes the test, return undefined.

 

function findElement(arr, func) {
  let num;
  for( let i = 0; i < arr.length; i++) {
   if(func(arr[i])) {
      num = arr[i];
      break;
    }
  }
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
or

The find() method returns the value of the first element

in the array that satisfies the provided testing function.

 Otherwise undefined is returned.


return arr.find(func);
 

///////////////////////////////
You are given two arrays and an index.
Use the array methods sliceand spliceto copy each element of the first array into the second array, in order.
Begin inserting elements at index nof the second array.
Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let NewArr = arr2.slice(0,arr2.length)

NewArr.splice(n, 0,...arr1);
return NewArr;

}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

 ///////////////////////////////

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);

}

//////////////////////////////////
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {

var x = arr[0].toLowerCase().split('');
var y = arr[1].toLowerCase().split('');
   return y.every(function(val) {
     return x.includes(val);

   });
   //////////////////////////////////////
 Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

 
const doubleChar = (str) => str.split("").map(c => c + c).join("");

or
function doubleChar(str) {

  var word = '';
  for (var i = 0; i < str.length; i++){
    word = word + str[i] + str[i];
  };
  return word;
};

////////////////

Rock paper scissors

Archibald, Brian
9:21 AM (10 hours ago)
to me

const rps = (p1, p2) => {

  if (p1 == p2)
    return 'Draw!';
   if (p1 == 'rock' && p2 == 'scissors')
     return 'Player 1 won!'
   else if (p1 == 'scissors' && p2 == 'paper')
     return 'Player 1 won!'
   else if (p1 == 'paper' && p2 == 'rock')
    return 'Player 1 won!'
   else

     return 'Player 2 won!';

   /////////////////////////////

Return average
function find_average(array) {

  return array.reduce( (accumulator, currentValue) => accumulator + currentValue )/array.length;

  /////////////////

  Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

 

function boolToWord( bool ){

  if (bool) {

    return "Yes";

  }

    return "No";
////////////////////////////////////////

Reverse a string

 

function solution(str){

 

return str.split("").reverse().join("");

 

}

 

Or 10 other ways:

 

Implementation 1:

function reverse(s) {

 var o = '';

  for (var i = s.length - 1; i >= 0; i--)

    o += s[i];

  return o;

}

Implementation 2:

function reverse(s) {

  var o = [];

  for (var i = s.length - 1, j = 0; i >= 0; i--, j++)

    o[j] = s[i];

  return o.join('');

}

Implementation 3:

function reverse(s) {

  var o = [];

  for (var i = 0, len = s.length; i <= len; i++)

    o.push(s.charAt(len - i));

  return o.join('');

}

Implementation 4:

function reverse(s) {

  return s.split('').reverse().join('');

}

Implementation 5:

function reverse(s) {

  var i = s.length,

      o = '';

  while (i > 0) {

    o += s.substring(i - 1, i);

    i--;

  }

  return o;

}

Implementation 6:

function reverse(s) {

  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }

  return o;

}

Implementation 7:

function reverse(s) {

  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);

}

Implementation 8:

function reverse(s) {

  function rev(s, len, o) {

    return (len === 0) ? o : rev(s, --len, (o += s[len]));

  };

  return rev(s, s.length, '');

}

Implementation 9:

function reverse(s) {

  s = s.split('');

  var len = s.length,

      halfIndex = Math.floor(len / 2) - 1,

      tmp;

 

 

     for (var i = 0; i <= halfIndex; i++) {

        tmp = s[len - i - 1];

        s[len - i - 1] = s[i];

        s[i] = tmp;

      }

      return s.join('');

    }

Implementation 10

function reverse(s) {

  if (s.length < 2)

    return s;

  var halfIndex = Math.ceil(s.length / 2);

  return reverse(s.substr(halfIndex)) +

         reverse(s.substr(0, halfIndex));


         //////////////////////////////////////////////////

It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS and Java) or "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python).

 
function bonusTime(salary, bonus) {
  if (bonus) {
  return "\u00A3" + salary * 10;
  }
  return "\u00A3" + salary;
}
Or

function bonusTime(salary, bonus) {

  return bonus ? `£${10 * salary}` : `£${salary}`;

}

//////////////////////////////////
Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {

  if(n % x == 0 && n % y == 0) {
    return true
    } else {
    return false
    }
}
///////////////////////////////

our task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

const min = (list) => Math.min(...list);

const max = (list) => Math.max(...list);

//////////////////////////

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(str){
  var newStr = "";
  for(var i=0;i<str.length;i++){
    if(Number(str[i])>=5){
      newStr += "1"
    }
    else{
      newStr += "0";
    }
  }
  return newStr;

or

function fakeBin(x) {

    return x.split('').map(n => n < 5 ? 0 : 1).join('');

    /////////////////////////////////////////////////
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :

Given a year, return the century it is in.

Input , Output Examples ::

centuryFromYear(1705)  returns (18)

centuryFromYear(1900)  returns (19)

const century = year => Math.ceil(year/100)
/////////////////////

Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {

let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};

/////////////////////////

We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function(str){
  return Number(str);
}

/////////////////////////////

Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

For example:

squareSum([1, 2, 2]); // should return 9

 

function squareSum(numbers){

  return numbers.reduce((sum,num) => sum + (num * num), 0);
  /////////////////////////////////////


Create a function with two arguments that will return a list of length (n) with multiples of (x).
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array (or list in Python, Haskell or Elixir).
Examples:
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

 
function countBy(x, n) {

    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;

    //////////////////////////////
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:

·        humanYears >= 1

·        humanYears are whole numbers only

·        15 cat years for first year

·        +9 cat years for second year

·        +4 cat years for each year after that

Dog Years

·        15 dog years for first year

·        +9 dog years for second year

·        +5 dog years for each year after that


var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;

  if(humanYears === 1) {

    catYears = 15;

    dogYears = 15;

  } else if (humanYears === 2) {

    catYears = 24;

    dogYears = 24;

  } else {

    catYears = 24 + ((humanYears - 2) * 4);

    dogYears = 24 + ((humanYears - 2) * 5);

  }

  return [humanYears,catYears,dogYears];

}

Or
const humanYearsCatYearsDogYears = humanYears => [

  humanYears,

  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,

  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,

];

/////////////////////////////////////////////////
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.

 function stringy(size) {
 var str='';
  for( var i=1; i<=size; i++ )
    str+=i%2;
  return str;

}/////////////////////////////////////
/////////////////
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
reverse('Hello World') === 'World Hello'
reverse('Hi There.') === 'There. Hi'

function reverse(string){

  return string.split(' ').reverse().join(' ');

}
///////////////////////////////////

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

function maps(x){

    const newArray = x.map(x => x * 2);

    return newArray;
}
function maps(x){

  return x.map(n => n * 2);
  /////////////////////////////////////
Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example
var words = ['hello', 'world', 'this', 'is', 'great'];
smash(words); // returns "hello world this is great"

smash = function (words) {

  return words.join(" ");

};

////////////////////////

Replace all vowels with !

function replace(s){

  return s.replace(/[aeiou]/gi, "!");

}

////////////////////

Remove all !’s in a string

function removeExclamationMarks(s) {

  return s.replace(/!/gi, ‘’);

}
//////////////////
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
Your task is to make 'Past' function which returns time converted to miliseconds.
#####Example:
past(0, 1, 1) == 61000

function past(h, m, s){
  return (h * 3600000) + (m * 60000) + (s * 1000);
}

Or
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
///////////////////////
///////11/9/18///////////

 

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

 

function check(a,x){

  if (a.includes(x)){

    return true;

  } else {

    return false;

  }

};

or

const check = (a,x) => a.includes(x);

 

///////////////////////////////////

//////////////////////////////////

 

  In this simple Kata your task is to create a function that turns a string into a Mexican Wave.

  You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules

  1.  The input string will always be lower case but maybe empty.

2.  If the character in the string is whitespace then pass over it as if it was an empty seat.

Example

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

 

function wave(str){

    let result = [];   

    str.split("").forEach((char, index) => {

        if (/[a-z]/.test(char)) {

            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));

        }

    });

    return result;
    /////////////////////////////////
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

 

function abbrevName(name){

  var nameArray = name.split(" ");

  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();

}

//nameArray[0] targets the first element of the array and nameArray[0][0] targets the first element of the first element.

//In this case, the first element of the first element is the first charater of that string.
////////////////////////////////////////////////////////

After a hard quarter in the office you decide to get some rest on a vacation.

So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.

Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

 

function rentalCarCost(d) {

  var cost = d * 40

  if (d > 2 && d < 7) {

     cost = cost - 20;

  } else {

    if (d > 6) {

    cost = cost - 50;

    }

  }

  return cost;

}

////////////////////////////////////////

Fizzbuzz

Print numbers 1 to n, but "fizz" for multiples of 3, "buzz" for multiples of 5, and "fizzbuzz" for multiples of 15

function fizzBuzz(n) {

for (let i = 1; i <= n; i++) {

if (i % 15 === 0) { console.log("fizzbuzz"); }
else if (i % 5 === 0) { console.log("buzz"); }
else if (i % 3 === 0) { console.log("fizz"); }
else { console.log(i); } }

}

//////////////////////////////////////////////////

get new aray with every other element.

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

////////////////////////

reverse integer

function reverseInt(n) {
parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}
///////////////////////////

how many vowels in string (no regex)
function vowels(str) {
let count = 0;
for (let char of str.toLowerCase()) {
if (['a','e','i','o','u'].includes(char)) {
count++
}
} return count;
}
//////////////////////////////////

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return True if yes, False otherwise :)

function hero(bullets, dragons){

  if ((bullets / 2) >= dragons) {

    return true;

    } else {

    return false;

    }

}

Or 
function hero(bullets, dragons){
  return bullets >= dragons * 2
}
///////////////////////////////

Messi goals function

Messi is a soccer player with goals in three leagues:

·        LaLiga

·        Copa del Rey

·        Champions.

Complete the goals function to return his total goals (the sum) for all three leagues.

Note: the parameter for this function will always be a valid number.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {

  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  ////////////////////////////////

  You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following symbols (including space after comma) -, .

There should be no space between the minus "-" sign and the digit after it.

Here are some valid coordinates:

·        -23, 25

·        24.53525235, 23.45235

·        04, -23.234235

·        43.91343345, 143

·        4, -3

And some invalid ones:

·        23.234, - 23.4234

·        2342.43536, 34.324236

·        N23.43345, E32.6457

·        99.234, 12.324

·        6.325624, 43.34345.345

·        0, 1,2

·        0.342q0832, 1.2324

function isValidCoordinates(coordinates){

  return /^-?((\d)|([0-8]\d)|(90))(\.\d+)?, ?-?((\d\d?)|(1[0-7]\d)|(180))(\.\d+)?$/.test(coordinates)

  /////////////////////////////////////////////////////////

  Ask a small girl - "How old are you?". She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

function getAge(inputString){
  return parseInt(inputString[0]);
}
//////////////////////////////////////////////////////////////////
 Complete the function which returns the weekday according to the input number:

·        1 returns "Sunday"

·        2 returns "Monday"

·        3 returns "Tuesday"

·        4 returns "Wednesday"

·        5 returns "Thursday"

·        6 returns "Friday"

·        7 returns "Saturday"

·        Otherwise returns "Wrong, please enter a number between 1 and 7"


function whatday(num) {

  switch (num) {
    case 1: return "Sunday";
    break;
    case 2: return "Monday";
    break;
    case 3: return "Tuesday";
    break;
    case 4: return "Wednesday";
    break;
    case 5: return "Thursday";
    break;
    case 6: return "Friday";
    break;
    case 7: return "Saturday";
    break;

    default: return "Wrong, please enter a number between 1 and 7";

  }

}
///////////////////////////////////////////////////////////////

Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

·        left - The current floor of the left elevator

·        right - The current floor of the right elevator

·        call - The called floor, i.e. the floor you want to reach

It should return the name of the elevator closest to the called floor ("left"/"right").
In the case where both elevators are equidistant from the called floor, choose the elevator to the right.
You can assume that the inputs will always be valid integers in the closed-open range [0, 3).
Examples:
elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"

const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'
//////////////////////////////////
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:

You have to write a function that accepts three parameters:
·        cap is the amount of people the bus can hold excluding the driver.
·        on is the number of people on the bus.
·        wait is the number of people waiting to get on to the bus.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:

enough(10, 5, 5);
// 0, He can fit all 5 passengers
enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting
function enough(cap, on, wait) {

  if (on + wait <= cap) {
  return 0;
  }
  return on + wait - cap;
}
/////////////////////////////
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
var countSheep = function (num){

  let str = "";

  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }

  return str;
}
///////////////////

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.
For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:

·        if x>y - 3 points

·        if x<y - 0 point

·        if x=y - 1 point

Notes:

·        there are 10 matches in the championship

·        0 <= x <= 4

·        0 <= y <= 4 

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;

}
////////////////////////////////

Sieve of Eratosthenes

 

var eratosthenes = function(n) {

    // Eratosthenes algorithm to find all primes under n

    var array = [], upperLimit = Math.sqrt(n), output = [];

 

    // Make an array from 2 to (n - 1)

    for (var i = 0; i < n; i++) {

        array.push(true);

   }

 

    // Remove multiples of primes starting from 2, 3, 5,...

    for (var i = 2; i <= upperLimit; i++) {

        if (array[i]) {

            for (var j = i * i; j < n; j += i) {

                array[j] = false;

            }

        }

    }

 

    // All array[i] set to true are primes

    for (var i = 2; i < n; i++) {

        if(array[i]) {

            output.push(i);

        }

    }

 

    return output;

};
//////////////
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

    function narcissistic( value ) {
      return ('' + value).split('').reduce(function(p, c){
        return p + Math.pow(c, ('' + value).length)
        }, 0) == value;
    }
    //////////////////////
    Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor.

    Example
    
    divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    
    divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    
     
    
    function divisibleBy(numbers, divisor) {
    
      return numbers.filter(n => n % divisor === 0)
    
  ///////////////////////////////////////////////

  Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

 

 

function findShort(s){

  var arr = s.split(' ');

  var smallest = arr[0];

  for (var i = 0; i < arr.length; i++) {

    if(arr[i].length < smallest.length){

      smallest = arr[i];

    }

  }

  return smallest.length;

}

function findShort(s){

  return Math.min.apply(null, s.split(' ').map(w => w.length));

}

 

function findShort(s){

    return Math.min(...s.split(" ").map (s => s.length));

}
    