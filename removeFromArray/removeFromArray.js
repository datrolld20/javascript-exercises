// My function will use a rest argument as the last arg (...arg).
// A for loop will iterate through each argument and do the following:
// While indexOf is not -1 (not present), array.splice(index, 1) to delete.

const removeFromArray = function(array, ...args) {
    let result = array;

    console.log('Original array: ' + result);

    for(let i = 0; i < args.length; i++) {
        
        while(result.indexOf(args[i]) !== -1) {
            console.log('Current arg: ' + args[i]);
            console.log('Index: ' + result.indexOf(args[i]));
            result.splice(result.indexOf(args[i]), 1);
        }
    }

    console.log(result);

    return result;
}

module.exports = removeFromArray
