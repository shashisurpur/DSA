function productSelf(nums){
    let totalProduct=1;
    let zeroCount=0;
    
    for(let num of nums){
        if(num !== 0){
            totalProduct *=num
        }else{
            zeroCount ++
        }
    }

    for(let i=0;i<nums.length; i++){
        if(nums[i] === 0){
            zeroCount > 1 ? nums[i]=0 :nums[i] =totalProduct
        }else{
            zeroCount >0 ? nums[i] =0 :nums[i] = totalProduct/nums[i]
        }
    }

    return nums
}
//productSelf([1,2,3,4])
//productSelf([-1,1,0,-3,3])

//PrefixandSuffix
function productSelfSuffix(nums){
    let result = new Array(nums.length);
    let prefix=1

    for(let i=0; i<nums.length;i++){
        result[i] = prefix
        prefix *=nums[i]
    }

    let suffix=1
    for(let i=nums.length -1; i>=0;i--){
        result[i] *=suffix
        suffix *= nums[i]
    }
    return result 
}