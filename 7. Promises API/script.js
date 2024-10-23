

let p1 = new Promise((res, rej)=>{
      setTimeout(()=>{
        res('P1 SUCCESS');
      }, 3000);
})

let p2 = new Promise((res, rej)=>{
      setTimeout(()=>{
        // res('P2 SUCCESS');
        rej('P2 FAIL');
      }, 1000);
})

let p3 = new Promise((res, rej)=>{
      setTimeout(()=>{
        res('P3 SUCCESS');
      },2000);
})

// Promise.all([p1, p2, p3])
//   .then( res =>{
//     console.log(res);
//   })
//   .catch( err =>{
//     console.error(err)
//   })


// Promise.allSettled([p1, p2, p3])
//   .then( res =>{
//     console.log(res);
//   })

// Promise.race([p1, p2, p3])
//   .then( res =>{
//     console.log(res);
//   })
//   .catch( err =>{
//     console.error(err)
//   })

Promise.any([p1, p2, p3])
  .then( res =>{
    console.log(res);
  })
  .catch( err =>{
    console.error(err)
  })