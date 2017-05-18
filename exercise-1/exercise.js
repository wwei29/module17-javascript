'use strict';

//Make a new variable `motto` for the value "The iSchool is my school"
var motto = "The iSchool is my school";

//Log out the motto
console.log(motto);

//Create a variable mottoLength that stores the length of the motto.
//Use the .length property
//Log out the length
var mottoLength = motto.length;

//Convert motto to upper case, replacing the previous value
//See http://www.w3schools.com/jsref/jsref_obj_string.asp for String methods
//Log out the changed motto
motto = motto.toUpperCase();
console.log(motto);

//Use the slice() method to extract the characters `ISCHOOL` into a new variable.
//Log out that variable
motto.slice(4,11);

//Use the indexOf() method to see if the word "cool" is in your string
//Log out a boolean whether it is or not
var indexCool = motto.indexOf("cool");
console.log(indexCool);

//Create a variable `name` that is your name (in all caps)
var name = "Wei Wei";

//Create a variable `namePossessive` that is the `name` variable followed by an `'S`
var namePossessive = name + "'S";

//Replace the word 'MY" in the motto with the `namePossessive` variable.
//Log out the new motto
motto = motto.replace("MY", namePossessive);
console.log(motto);

//Log out the difference in length between the origial motto and the new motto
console.log(motto.length - mottoLength);