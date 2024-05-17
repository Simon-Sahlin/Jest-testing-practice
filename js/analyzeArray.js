

function analyzeArray(arr){
    return {
        average:arrayAverage(arr),
        min:arrayMin(arr),
        max:arrayMax(arr),
        length:arr.length
    }
}

function arrayAverage(arr){
    let tot = 0;
    arr.forEach(n => {
        tot += n;
    });
    tot /= arr.length;
    return tot;
}

function arrayMin(arr){
    let min = Infinity;
    arr.forEach(n => {
        if (n < min) min = n;
    });
    return min;
}
function arrayMax(arr){
    let max = 0;
    arr.forEach(n => {
        if (n > max) max = n;
    });
    return max;
}



module.exports = analyzeArray;