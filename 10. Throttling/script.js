

function throttle(fn, d){

  return function(...args){
    document.getElementById('myId').disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  }
}

const myThrot = throttle(()=>{
  document.getElementById('myId').disabled = false;
  console.log('mja agya function kaam krgya')}
  , 3000)