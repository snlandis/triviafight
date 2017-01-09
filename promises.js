function addPromise (a,b) {
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }
    else{
      reject('a and b need to be numbers');
    }
  });
}

addPromise (7, 24).then (function (sum) {
  console.log('sucess', sum);
},function (err){
  console.log('error', err);
});


addPromise ('Erroll', 24).then (function (sum) {
  console.log('sucess', sum);
},function (err){
  console.log('error', err);
});
