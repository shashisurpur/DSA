function maxProfit(nums){
    let minPrice=Infinity
    //minPrice=nums[0]
    let maxProfit= 0
    
    for(let num of nums){
        if(num < minPrice){
            minPrice= num
        }
        let profit = num -minPrice
        maxProfit = Math.max(maxProfit,profit)
    }
    return maxProfit
}
//console.log(maxProfit([7,1,5,3,6,4]))

function alternative(nums){
    let minPrice=0;
    let max=0
    for(let i=0;i<nums.length;i++){
        if(nums[i] < nums[minPrice]){
            minPrice=i
        }
        let profit = nums[i] - nums[minPrice]
        max = Math.max(max,profit)
    }
    return max
}
//console.log(alternative([7,1,5,3,6,4]))
