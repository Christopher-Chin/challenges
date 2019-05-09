/*

Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday. 
Current time is : 10 PM : 30 : 38 

*/

let date = new Date();

let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector("#day").innerHTML = `Today is ${weekday[date.getDay()]}`;

let hour = date.getHours();
let minute = date.getMinutes(); 
let seconds = date.getSeconds(); 

document.querySelector("#time").innerHTML = `Current time is : ${hour}:${minute}:${seconds}`;
