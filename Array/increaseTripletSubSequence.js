function increasingTriplet(nums){
    let first = Infinity
    let second = Infinity;

    for(let num of nums){
        if(num <= first){
            first = num
        }else if(num <= second){
            second = num
        }else{
            return true
        }
    }
    return true
}


// My Solution
function tripletSubSequece(nums){
    if(nums.length < 3) return false

    let i=0,j=i+1,k=j+1;

    while(k< nums.length){
        if(nums[i] < nums[j] && nums[j] < nums[k]){
            return true
        }
        i++;
        j++;
        k++;
    }
    return false
}