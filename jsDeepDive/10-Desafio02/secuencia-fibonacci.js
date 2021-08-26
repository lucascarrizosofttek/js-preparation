var calcularFibonacci = (a,b, endNumber) => {

    var secuencia = [Math.min(a, b), Math.max(a, b)];

    do {
        var aLast = secuencia[secuencia.length - 2];
        var last = secuencia[secuencia.length - 1];

        if ((aLast + last) < endNumber)
            secuencia.push(aLast + last);
    } while ((aLast + last) < endNumber);

    return secuencia;
}