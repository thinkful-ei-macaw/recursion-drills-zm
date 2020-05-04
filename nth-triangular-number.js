function nthTriangularNumber(n){
    // base case
    if(n === 0){
        return 0;
    }
    // recursive case
    return n + nthTriangularNumber(n-1);
}

console.log(nthTriangularNumber(4));