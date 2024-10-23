


let userDetails = {
  name:'Rohan',
  age:21,
  occupation:'berozgar',
}

let printDetails = function(state, country, methodName){
  console.log(this.name +"  " + state + "  " + country + " using " + methodName);
}


//Call 
printDetails.call(userDetails, 'haryana', 'India', 'Call');

//Apply
printDetails.apply(userDetails, ['haryana', 'India', 'Call']);

//Bind
let ans =  printDetails.bind(userDetails, 'haryana', 'India', 'Call');
ans();