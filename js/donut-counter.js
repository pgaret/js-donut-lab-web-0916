//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
var guests = Number(prompt("Please enter the number of guests: "))
var donuts = Number(prompt("Please enter how many donuts you have: "))

if (guests <= donuts) {
  alert(`You've got ${guests} guests and ${donuts} donuts, guess you're be okay.`)
} else {
  alert(`You've got ${guests} guests and ${donuts} donuts, better get some more donuts.`)
}
