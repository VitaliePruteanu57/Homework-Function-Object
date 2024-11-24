function sumPar(masiv){
  let sum=0;
  for (let i =0;i<masiv.length;i++){
    if(masiv[i]%2===0){
        sum+=masiv[i];
    }
  }
return sum;
}

function sumImpar(masiv){
    let sum=0;
    for (let i =0;i<masiv.length;i++){
      if(masiv[i]%2!==0){
          sum+=masiv[i];
      }
    }
  return sum;
  }
  function maxSum(sum1, sum2) {
    if (sum1 > sum2) {
      console.log(`Наибольшая сумма: ${sum1}`);
    } else if (sum2 > sum1) {
      console.log(`Наибольшая сумма: ${sum2}`);
    } else {
      console.log("Суммы равны.");
    }
  }
  
const array=[5,6,3,1,8];

const  sumP=sumPar(array);

const  sumI=sumImpar(array);

console.log(`Сумма четных чисел: ${sumP}`);
console.log(`Сумма нечетных чисел: ${sumI}`);

maxSum(sumP,sumI);