'use strict'

// this in global space
    // console.log(this)


// this inside a function 
    function x(){
        // Behave differently in strict and non strict mode
        console.log(this);
    }


// this in non-strict mode - (this substitution happens) 
    // -> The value of this keyword is undefined or null.
    // -> This keyword will replaced with globalObject in case of non-strict mode  


// this value depends on how the function is called 
    // x();
    // window.x();


// this inside a objects method
    const student1 = {
        name: 'ROHAN',
        printName: function(){
            console.log(this.name)
        }
    }
    const student2 = {
        name: 'ROHIT',
    }
    // student1.printName();
    // student1.printName.call(student2);


// this innside an arrow function
    const a = () =>{
        console.log(this);
    }
    // a();

// this inside nested arrow function
    const obj = {
        n:'1',
        x: function (){
            //closing lexical context
            const y = ()=>{
                console.log(this);
            }
            y();
        }
    }
    obj.x();