// ARRAYS AND LOOP
/*1. Declare and initialize an empty multidimensional array.
(Array of arrays)
var n = []
var n=[[[]]],*/

/*2. Declare and initialize a multidimensional array 
representing the following matrix:*/
/*  var a  = []
 var a= [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]]
   
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a[i].length; j++) {
        document.write(a[i][j] + " " )
      }
      document.write("<br>" + "<br>")
    }*/
    
    /*3. Write a program to print numeric counting from 1 to 10.*/
// var n=[1,2,3,4,5,6,7,8,9,10]

/*for (var i = 1; i <= 10; i++) {
    document.write(i)
    document.write("<br>")
}*/
/*4. Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user.*/
/*var TNum = Number ( prompt ("Enter a number to show its multiplication table"))
var TLength = Number ( prompt ("Enter length of multiplication table"))
document.write("Multiplication Table of " + TNum)
document.write("Length " + TLength )
for (var i = 1; i <= TLength; i++) {
  document.write(TNum + " x " + i + " = " + (TNum * i))
  document.write("<br>")
}*/
/*5. Write a program to print items of the following array 
using for loop:*/
/*var fruits = [ "apple" , "banana" , "mango" , "orange" , "strawberry"]
for ( var i = 0 ; i < fruits.length ; i++){
    document.write(fruits[i] + " " + "<br>")
}
document.write("Element at index 0 is " + fruits[0] + "<br>")
document.write("Element at index 1 is " + fruits[1] + "<br>")
document.write("Element at index 2 is " + fruits[2] + "<br>")
document.write("Element at index 3 is " + fruits[3] + "<br>")
document.write("Element at index 4 is " + fruits[4] + "<br>")*/
/*6. Generate the following series in your browser. See 
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15*/
 /*document.write("Number")
var NumSeries = "Counting "
for (var i = 0 ; i <= 15 ; i++) {
    NumSeries += i + ", "
}*/
/*b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1*/
/*var RevNumSeries = "Reverse counting"
for (var i = 10 ; i >= 1 ; i-- ) {
    RevNumSeries += i + ", "
}*/
/*c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20*/
/*var EvenSeries = "Even"
for (var i = 0 ; i <= 20 ; i += 2 ){
    EvenSeries += i + ", "
}
EvenSeries = EvenSeries.slice(0 , -2)
document.write(EvenSeries)*/

/*d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19*/
/*var OddSeries = "Odd<br>"
for ( var i = 1 ; i <= 19 ; i += 2 ){
    OddSeries += i + ", "
}
OddSeries = OddSeries.slice(0 , -2)
document.write(OddSeries)*/
/*e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/
/*var kSeries = "KSeries<br>"
for (var i = 2 ; i <= 20 ; i += 2){
    kSeries += i + "k,"
}
kSeries = kSeries.slice(0 , -2);
document.write(kSeries);*/
/*7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:*/
/*var snacks = ["cake", "apple pie", "cookie", "chips", "patties"]
var yourorder = prompt("Welcome to ABC Bakery"+ "What do you want to order sir/maam");
var index = snacks.indexOf(yourorder);
if (index >= 0) {
  alert(yourorder + " is available at index " + index + " in our bakery.");
} else {
  alert("We are sorry. " + yourorder + " is not available in our bakery.");
}*/
/*8. Write a program to identify the largest number in the 
given array.
A = [24, 53, 78, 91, 12].*/
/*var AA = [24 , 53 , 78 , 91 , 12]
document.write ("Array items: " + AA + "<br>");
var lNum = AA[0]
for ( var i = 1 ; i < AA.length ; i++){
if ( AA[i] > lNum ) {
    lNum = AA[i]
}
}
document.write("The largest number is " + lNum);*/

/*9. Write a program to identify the smallest number in the 
given array.
A = [24, 53, 78, 91, 12]*/
/*var a = ["12","53","78","91","24"]
document.write("Array:" + a + "<br>");
var sNum = a[0]
for ( var i = 0; i<a.lenght;i++){
  if(sNum > a[i]){
    sNum = a[i]
  }
}
document.write("The smallest number is " + sNum);*/
/*10. Write a program to print multiples of 5 ranging 1 to 
100.*/
 
/*for(var rang = 5; rang <= 100; rang+=5){
  document.write(rang + ","); 
}*/


  
