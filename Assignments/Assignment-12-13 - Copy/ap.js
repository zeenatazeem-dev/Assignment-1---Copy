// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 
/*1. Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122).
var str = "A"
 var codes = str.charCodeAt(0);
 console.log(codes)*/
/*2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.
var a = 10;
var b =5;
var c = 2==2;
 a = prompt("value 10>5 ");
 b = prompt("value 5<10");
c = prompt("value 2==2");
if (a>b){
document.write(" value 10 = ",a, " is Greater than value 5 = ",b);
}
else if (b<a){
document.write(" value 5 = ",b, " is less than value 10 = ",a);
}
else{
  document.write(" value 2 = ",c, " is  Equal to value 2 = ",c);
}*/
/*3. Write a program that takes input a number from user & 
state whether the number is positive, negative or zero.
var x;
x=prompt("enter a number");
if(x>0){
  alert(x+ "is  positive")
}
else if(x<0){
  alert(x+ "is  nagative")
}
else(x==0)
  alert(x+ "is  equal to zero")*/
  /*4. Write a program that takes a character (i.e. string of 
length 1) and returns true if it is a vowel, false otherwise



5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then 
give message “ Please enter your password”
ii. Check if both passwords are same. If they are 
same, show message “Correct! The password you 
entered matches the original password”. Show 
“Incorrect password” otherwise.*/
 
/*6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 18;
var hour = 13;
if ("hour < 18") 
alert("Good day");{
if("hour < 13")
 alert("Good evening");
}*/
/*7. Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements.
function showTime(){
  var dt=new Date();
  var hh=dt.getHours();
  var mm=dt.getMinutes();
  var ss=dt.getSeconds();
  var h1,m1,s1;
  if(hh<10)
  h1="0"+hh;
  else
  h1=hh;
  if(mm<10)
  m1="0"+mm;
  else
  m1=mm;
  if(ss<10)
  s1="0"+ss;
  else
s1=ss;
var time1=h1+":"+m1+":"+s1;
document.getElementById("sp2").innerHTML=time;
}
function call(){
  setInterval(showTime,1000);
    
  
}*/

