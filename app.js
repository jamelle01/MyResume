function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    } else {
        return base * power(base, exponent - 1);
    }
}

// Example usage:
iReturnValue = power(2, 5);
console.log(iReturnValue);
