
function calcularFactorial(params:number) {
    let resolt:number = 1
    for (let index = 1; index < params + 1; index++) {
        resolt = resolt*index
        console.log(resolt);
        
        
    }
    return resolt
}
//calcularFactorial(6)



function palindromo(params:string) {
    let resultado:boolean = true
    let arrayresult = params.split('');
    for (let i = 0; i < params.length;) {
      if (arrayresult[i] === arrayresult[params.length -1 -i ]) {
        i = i + 1
    }else {
        return resultado  = false
    }  
        
    }
    return resultado
    
}
console.log(palindromo("radar"));
console.log(palindromo("arturo"));

function fibo(n:number) {
    if ( n<=1) {
        return n
    }
    let fibPrev = 0
    let fibCurr = 1

    for (let i = 0; i < n -1; i++) {
        const temp = fibCurr
        fibCurr =  fibPrev+ fibCurr 
        fibPrev = temp
        
    }
    return fibCurr
}

console.log(fibo(2));
