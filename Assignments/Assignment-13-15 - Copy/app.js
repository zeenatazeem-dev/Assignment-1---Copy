// ARRAYS
/*1. Declare an empty array using JS literal notation to store
student names in future.
var students = [];*
/*2. Declare an empty array using JS object notation to store
student names in future.*/
/*var students = ["ali","aliya","manoor","saad"];
document.write(students);*/
/*3. Declare and initialize a strings array.
var x = ["apple","banana","mango","peach","pineapple","watermillion","grapes"];
x.toString();
document.write(x);*/

/*4. Declare and initialize a numbers array.*/
/*var a = [1,3,6,63,73,83];
document.write(a);8/

/*5. Declare and initialize a boolean array.
var x = ["apple","banana","mango","peach","pineapple","watermillion","grapes"];
// flase
console.log(!x);
document.write(x);
// true
console.log(!!x);
document.write(x);*/
/*6. Declare and initialize a mixed array.
var x = ["apple",7,false,true,"ali","this is",8];
console.log(x);
document.write(x);*/
/*7. Declare and Initialize an array and store available 
education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like:
var x =["SSC","HSC","BCS","BCOM","MS","MPhil","PhD"];
document.write("Qualificatins");
document.write("<br>" + "1" + ")" + "SCC");
document.write("<br>" + "2" + ")" + "HSC");
document.write("<br>" + "3" + ")" + "BSC");
document.write("<br>" + "4" + ")" + "BCOM");
document.write("<br>" + "5" + ")" + "MS");
document.write("<br>" + "6" + ")" + "M.Phil");
document.write("<br>" + "7" + ")" + "PhD");
*/

/*8. Write a program to store 3 student names in an array.Take
another array to store score of these three students. 
Assume that total marks are 500 for each student, display 
the scores & percentages of students like:
var students = ["Mecheal" , "John" ,"Tony"]
var score = [320,230,480]
 per1 = (320/500)*100 + "%";
per2 = (230/500)*100 + "%";
 per3 = (480/500)*100 + "%";
 document.write("score of Mecheal is 320.Percentage:" + per1); 
document.write("<br>" + "score of John is 230 Percentage:" + per2);
document.write("<br>" + "score of  Tony is 480.Percentage:" + per3);*/
/*9. Initialize an array with color names. Display the array
elements in your browser.*/
var c = ["white", "pink","yellow" ,"green","red"];
document.write(c+ "<br>");

/*a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end 
& add that color to the end of the array. Display the 
updated array in your browser.
c. Add two more color to the beginning of the array. 
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color 
& color name. Then add the color to desired 
position/index. . Display the updated array in your 
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defineed
position/index. . Display the updated array in your
browser.
var c = ["white", "pink","yellow" ,"green","red"];
document.write(c+ "<br>");
c.push();
document.write(c + "<br>");
c.shift();
document.write(c + "<br>");
c.pop();
document.write("purple" + "<br>");
c.unshift();
document.write(c);*/
/*10. Write a program to store student scores in an array & 
sort the array in ascending order using Array’s sort 
method.
var s =[320,230,480,120]
document.write("Score of students" + ":")
document.write(s + "<br>")
document.write("Ordered score of" + ":")
s.sort()
 document.write(s)*/
/*11. Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities 
array.
document.write("Cities List" +"<br>");
var cityNames = ["Karachi" ,"Lahore","Islamabad","Quitta" ,"Peshawar" + "<br>"];
document.write(cityNames + "<br","<br>");
document.write("Selected cities list" + "<br>");
document.write(cityNames[2]+",");
document.write(cityNames[3]);*/
/*12. Write a program to create a single string from the 
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)
Arrays | J
document.write("Array"+ ":" + "<br>");
var arr = ["This","is","my","cat"];
document.write(arr + "<br>");
document.write("String" + ":" + "<br>"); =
var arr = ["This is my cat"];
arr.join();
document.write(arr);*/

/*13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out)*/
 /*document.write("Divices" + "<br>")
 var new_arr = ["keyboard","mouse" ,"printer","moniter"];
 document.write( new_arr +"<br><br>")
//  document.write("<br><br>");
 var fo1=new_arr.shift();
 document.write("out:<br>"+fo1+"<br>");
 var fo2=new_arr.shift();
 document.write("out:<br>"+fo2+"<br>");
 var fo3=new_arr.shift();
 document.write("out:<br>"+fo3+"<br>");
 var fo4=new_arr.shift();
 document.write("out:<br>"+fo4+"<br>");*/

 /*14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out)*/
// document.write(Devices);
/*document.write("Divices" + "<br>")
var computer = ["keyboard","mouse" ,"printer","moniter"];
document.write(computer + "<br>" );
var lo1=computer.pop();
document.write("out:<br>"+lo1+"<br>");
var lo2=computer.pop();
document.write("out:<br>"+lo2+"<br>");
var lo3=computer.pop();
document.write("out:<br>"+lo3+"<br>");
var lo4=computer.pop();
document.write("out:<br>"+lo4+"<br>")*/

/*15. Write a program to store phone manufacturers (Apple,
    Samsung, Motorola, Nokia, Sony & Haier) in an array. 
    Display the following dropdown/select menu in your 
    browser using document.write() method:
  var p = ["Apple, Samsung, Motorola, Nokia, Sony & Haier"];
  document.write(p + "<br>") 
document.write("<select>" 
+ "<option value = 'p[0]'> DropMenu </option>"
+ "<option value = 'p[1]'> Apple</option>"
+ "<option value = 'p[2]'> Samsung</option>"
+ "<option value = 'p[3]'> Motorolla</option>"
+ "<option value = 'p[4]'> Nokia</option>"
+ "<option value = 'p[5]'> Sony</option>"
+ "<option value = 'p[6]'> Haier</option>" 
+ "</select>");*/