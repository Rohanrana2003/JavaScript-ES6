

// Higher order functions

//forEach
//filter
//map
//sort
//reduce

// const companies = [
//   {name:"Google", category:"Product Based", start:"1981", end:"2004"},
//   {name:"Amazon", category:"Product Based", start:"1991", end:"2007"},
//   {name:"Paytm", category:"Product Based", start:"1999", end:"2008"},
//   {name:"MindTree", category:"Service Based", start:"1996", end:"2010"},
//   {name:"Coforge", category:"Service Based", start:"1997", end:"2012"},
// ]

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


/*----------[forEach]----------*/
    // Normal method
    // for(let i=0; i<companies.length; i++){
    //   console.log(companies[i].name);
    // }
    // // forEach method
    // companies.forEach((company, i)=>(console.log(company, i)));



/*----------[Filter]----------*/
    // // Normal method
    // for(let i=0; i<ages.length; i++){
    //   if(ages[i] <= 18) console.log(ages[i]);
    // }
    // // Filter method
    // const ans = ages.filter(age=> age<=18);
    // const ans2 = companies.filter(company=> company.category === 'Service Based')
    // console.log(ans , ans2);



/*----------[Map]----------*/
    //Normal method
    // for(let i=0; i<companies.length; i++){
    //   console.log(companies[i].name);
    // }
    // //Map method
    // companies.map(company => console.log(company.name))


  
/*----------[Sort]----------*/
    //Normal method
    // const sorted = companies.sort(function(c1,c2){

    //   if(c1.start > c2.start) return 1;
    //   else return -1;
    // })
    // console.log(sorted);

    //Short Method
//     const sorted1 = companies.sort((c1,c2)=> (c1.start > c2.start) ? 1 : -1); 
//     console.log(sorted1);

//     const sortAges = ages.sort((a,b)=> a-b); 
//     console.log(sortAges);



// /*----------[Reduce]----------*/
//     // Normal method
//     let total = 0;
//     for(let i=0; i<ages.length; i++){
//       total = total + ages[i];
//     }
//     console.log(total);

//     //Reduce method
//     const ansReduce = ages.reduce((total, age)=> (total + age), 0)
//     console.log(ansReduce);





// Another example of Higher Order Function

  const radius = [1 ,2, 4, 8];

  let output = [];

  const area = function(radius){
    return Math.PI *radius * radius;
  }

  const diameter = function(radius){
    return radius*2;
  }

  const circumfrence = function(radius){
    return 2 * Math.PI * radius
  } 

  //High order Function
  const calculate = (radius, logic) =>{
    radius.forEach(element => {
      output.push(logic(element)); 
    });
    return output
  }
  // OR
 console.log(radius.map(area));
 console.log(radius.map(diameter));
 console.log(radius.map(circumfrence));


//  console.log(calculate(radius, area));
 console.log(calculate(radius, diameter));
//  console.log(calculate(radius, circumfrence));
























