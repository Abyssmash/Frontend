// 소수(prime number) 판별
let num = 13;
//for (let i = 2; i < num; i++) {
//    if (num % i == 0 ) {
//        console.log(`${num} 은/는 소수가 아님.`);
//        break;
//    }
//}

function isPrimeNumber(num) {
    let sqrtNum = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i == 0)
            return false;
    }
    // for (let i = 2; i < num; i++) {
    //  if (num % i == 0)
    //      return false;
    //}
    return true;
}

console.log(isPrimeNumber(12));
console.log(isPrimeNumber(13));

// 2에서부터 20까지의 소수
let primeNumbers = [];
for (let i = 2; i <= 100; i++) {
    if (isPrimeNumber(i))
        primeNumbers.push(i);
}
console.log(primeNumbers);