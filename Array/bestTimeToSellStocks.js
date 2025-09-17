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