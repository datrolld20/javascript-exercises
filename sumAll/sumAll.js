const sumAll = function(a, b) {
    let sum = 0;

    if(typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
        return 'ERROR';
    }

    for(let i = Math.min(a,b); i <= Math.max(a,b); i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
