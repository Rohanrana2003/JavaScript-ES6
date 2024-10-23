//        [PROMISES]


const cart = ['bag', 'toy'];

let promise = createOrder(cart);

promise
  .then(function(orderID) {
    console.log(orderID);
    return orderID;
  })
  .then(function (orderID){
    return paymentInfo(orderID);
  })
  .then(function(paymentID){
    console.log(paymentID)
    return paymentID;
  })
  .then(function(paymentID){
    return orderSummary(paymentID);
  })
  .then(function(orderSummary){
    console.log(orderSummary)
  })
  .catch(function(err){
    console.log(err.message)
  })
  .then(function(){
    console.log('No matter what happens. I will run')
  })



function createOrder() {
  const pr = new Promise(function (resolve, reject) {

    if (!validateCart(cart)) {
      const err = new Error('Bad Request');
      reject(err);
    }
    let orderID = '12345'
    if (orderID) {
      setTimeout(() => {
        resolve(orderID);
      }, 3000);
    }
  })
  return pr;
}
function validateCart(cart) {
  return true;
}



function paymentInfo(orderID){
  return new Promise((resolve, reject) => {
    let paymentID = '12345'
    if (paymentID) {
      console.log('Payment Done')
      resolve(paymentID);
    }
    
  })
}

function orderSummary(paymentID){
  return new Promise((resolve, reject)=>{
    if(!paymentID){
      const err = new Error('Bad Request (Order Summary)');
      reject(err);
    }
    const summary = {
      product: 'shoes',
      size: '8'
    }
    resolve(summary);
  })
}
