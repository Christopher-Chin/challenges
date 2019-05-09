/*

  (ES6) Write a JavaScript program to compare two numbers to determine if the 
  first one contains equivalent property values to the second one.

*/

let result = document.querySelector('#result');

const equals = (a,b) =>{
  if(a == b){
    result.innerHTML = `<strong>Result 1:</strong>${a}<br/>
			<strong>Result 2:</strong> ${b}<br/> 
			Both values are equal!`;
  }
}

equals(10,10);
