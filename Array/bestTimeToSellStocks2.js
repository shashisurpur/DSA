function maxProfit2(nums){
    let max=0;
    for(let i=0; i<nums.length-1;i++){
        if(nums[i] < nums[i+1]){
            let profit = nums[i+1] -nums[i]
            max+=profit
        }
    }
    return max
}
console.log(maxProfit2([7,1,5,3,6,4]))
function maxProfit2Alternative(nums){
    let max=0;
    for(let i=1; i<nums.length;i++){
        if(nums[i] > nums[i-1]){
            let profit = nums[i] -nums[i-1]
            max+=profit
        }
    }
    return max
}