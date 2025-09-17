function productSelf(nums){
    let totalProduct = nums.reduce((c,n)=>c *=n,1)
    for (let index = 0; index < nums.length; index++) {
        nums[index] = totalProduct /nums[index]
    }
    return nums
}
//productSelf([1,2,3,4])