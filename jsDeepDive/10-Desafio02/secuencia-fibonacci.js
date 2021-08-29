var calcularFibonacci = (secuencia, endNumber) => {

    var aLast = secuencia[secuencia.length - 2];
    var last = secuencia[secuencia.length - 1];

    if ((aLast + last) < endNumber) {
        secuencia.push(aLast + last);
        return calcularFibonacci(secuencia, endNumber)
    }

    return secuencia;
}

console.log(calcularFibonacci([1, 3], 50));