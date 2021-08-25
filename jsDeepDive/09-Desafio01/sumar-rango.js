var sumarRango = () => {
    var suma = 0;
    for (var i = 10; i <= 50; i++) {
        if (i % 2 == 0)
            suma += i;
    }
    return suma;
};
console.log(sumarRango());