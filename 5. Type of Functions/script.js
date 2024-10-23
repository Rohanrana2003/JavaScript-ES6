/*------------------[Functions]------------------- */

//  [1. Function Statement OR Function Declaration]

    // one(); //Hoisted
    // function one() {
    //     console.log('Function Expresion') //Hoisiting can be done
    // }
    // one();

//  [2. Function Expression]

    // two(); //Give an error not support hoisting
    // var two = function () {
    //     console.log('Function Statement')
    // }
    // two();


//  [3.Named Function Expression]

    // var three = function named(){
    //     console.log('Named function Expression');
    // }
    // three();
    // named();  //Cannot be called like that


// [4. Anonymous Function]
    // function (){
    //     //Gives an error it should be called as an expression.
    // }


//  [5. First Class Function] -> " {The Ability of Functions to being used as a Value} "

    // let firstClass = function(param){
    //     console.log(param)
    // }
    // function print(){
    // }

    // firstClass(print);
    //OR

    let firstClass = function(){
        return function print(){

        }
    }

    console.log(firstClass());