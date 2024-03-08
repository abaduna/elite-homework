function canSum(n:number, arr:number[]) {
    let result = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === n) {
                console.log(` i ${arr[i]} + j ${arr[j]}= ${n}`);
                console.log(` resutl ${arr[i] + arr[j] === n}`);
              return  result = true
            }
            
        }
        
    }
    return result
}
console.log(1,canSum(8,[5,3,4,7]));
console.log(2,canSum(4,[5,3,3,7]));

