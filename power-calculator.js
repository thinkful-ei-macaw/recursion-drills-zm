// Write a function that calculates power
function powerCalculator(base, exponent) {

    if (exponent < 0) {
        console.log('exponent should be >=  0');
    }
    else {
        // base case
        if(exponent === 0){
            return 1;
        }
        // recursive case
        return base * powerCalculator(base, (exponent - 1));
    }
}
