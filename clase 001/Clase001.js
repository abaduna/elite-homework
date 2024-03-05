function calcularFactorial(params) {
    var resolt = 1;
    for (var index = 1; index < params + 1; index++) {
        resolt = resolt * index;
        console.log(resolt);
    }
    return resolt;
}
//calcularFactorial(6)
function palindromo(params) {
    var resultado = true;
    var arrayresult = params.split('');
    for (var i = 0; i < params.length;) {
        if (arrayresult[i] === arrayresult[params.length - 1 - i]) {
            i = i + 1;
        }
        else {
            return resultado = false;
        }
    }
    return resultado;
}
console.log(palindromo("radar"));
console.log(palindromo("arturo"));
function fibo(n) {
    if (n <= 1) {
        return n;
    }
    var fibPrev = 0;
    var fibCurr = 1;
    for (var i = 0; i < n - 1; i++) {
        var temp = fibCurr;
        fibCurr = fibPrev + fibCurr;
        fibPrev = temp;
    }
    return fibCurr;
}
console.log(fibo(20));
