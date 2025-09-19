function zeroFilledSubArray(nums) {
    let count = 0;
    let result = 0
    for (let num of nums) {
        if (num === 0) {
            count++;
        } else {
            count = 0
        }
        result += count
    }
    return result
}
//console.log(zeroFilledSubArray([1,3,0,0,2,0,0,4]))

function alternative(nums) {
    let zeroCount = 0;
    let subArrCount = 0;
    for (let num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            subArrCount += (zeroCount * (zeroCount + 1)) / 2
            zeroCount = 0
        }
    }
    subArrCount += (zeroCount * (zeroCount + 1)) / 2

    return subArrCount
}