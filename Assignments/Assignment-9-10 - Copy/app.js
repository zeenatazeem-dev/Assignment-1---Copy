// USER INPUT & CONDITIONAL STATEMENT
/*1. Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: 
“Welcome to city of lights”
var city = " “Karachi”";
var welcome = "“Welcome to city of lights”";
document.write(city  + welcome);*/
/*2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am.
var male ="Good Morning sir"
var female = "Good Morning Ma’am"
if ("male") {
    document.write("<br>" +"Good Morning sir" + male);
    if
("female") 
    document.write("<br>"+"Good Morning Ma’am" + female);
}*/
/*3. Write a program to take input color of road traffic signal 
from the user & show the message according to this table:
Signal color Message
var color1 = 'Red';
var color2 = 'Yellow';
var color3 = 'Green';
console.log(color1  +' Must Stop'); 
console.log(color2  +' Ready to move');
console.log(color3  + 'Move now');*/

/*4. Write a program to take input remaining fuel in car (in 
    litres) from user. If the current fuel is less than 0.25litres, 
    show the message “Please refill the fuel in your car”
var fuel = Number (prompt("fuel in car in litres?"));
    if (fuel in car<=0.25 ){
        alert("Please refill the fuel in your car");
    }*/

/* 5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
User Input & Conditional Statement | JAVASCRIPT
Page 2 of 4
b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
e. if (true){
alert("True");
}
if (false){
alert("False");
}
f. if("car" < "cat"){
alert("car is smaller than cat");
}
   (the code is not running) */
/*6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute 
grade as per following table:
Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.
var subject1 = 76;
var subject2 = 65;
var subject3 = 78;
 sum = (subject1 + subject2 + subject3)
 per = (219/300)*100
document.write("<h1>Mark Sheet</h1>" +"<br>" + "Total Marks:" + 300);
document.write("<br>" + "Obtain Marks:" + sum);
document.write("<br>" + "Perecentage:" + per);
document.write("<br>" + "Grade:" +" B");
 document.write("<br>" + "Remarks:" + "You need to improve");*/
 
/*7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.

  
 alert("Guess num");
 var secNum = 13;
var guess = +prompt("guess the secret number between 1 to 13");
if (guess == secNum){
    alert("Bingo! You are Correct "); 
}
if (guess == secNum-7){
    alert("Close anough to the correct answer");
}*/

 
/*8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number 
is divisible by 3.

var userInput = +prompt("divide any num with:3");
if (userInput%3 == 0) {
    alert("correct")
}*/
/*9. Write a program that checks whether the given input is an
even number or an odd number.
var userInput = +prompt("input is an even number");
if (userInput%2 == 0) {
    alert("correct even number");
}
var userInput = +prompt("an odd number");
if (userInput%2 !== 0) {
    alert("correct odd number");
}*/

/*10. Write a program that takes temperature as input and 
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”
var temp= +prompt(" T 50 > 40 then");
if(50>=40){
   alert("“It is too hot outside.”"); 
}
var temp= +prompt(" T 35 > 30 then");
if(35>=30){
   alert("“The Weather today is Normal”"); 
} 
var temp= +prompt(" T 15 > 20 then");
if(15>=20){
   alert("“Today’s Weather is cool”"); 
} 
var temp= +prompt(" T 5 > 10 then");
if(5>=10){
   alert("“OMG! Today’s weather is so Cool”"); 
}*/

/*11. Write a program to create a calculator for +,-,*, / & % 
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/
/*var num1 = prompt("enter num1");
var oprater = prompt("enter oprater(-,+,*,/,%)");
var num2 =prompt("enter num2");

var result = num1 + num2
if(oprater == "+"){
    result= num1+num2;
}
 else if (oprater == "-"){
    result= num1+num2;
}

else if(oprater == "*"){
    result= num1+num2;
}
else if(oprater == "/"){
    result= num1+num2;
}
else if(oprater == "%"){
    result= num1+num2;
}
else{
document.write(result)
}   */