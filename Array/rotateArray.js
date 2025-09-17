function rotateArray(nums,k){
    k= k % nums.length;

    nums.reverse()
    const rotate=(start,end)=>{
        while(start < end){
            [nums[start], nums[end] ]= [nums[end],nums[start]]
            start++;
            end --;
        }
    }
    rotate(0,k-1)
    rotate(k,nums.length-1)
    return nums
} 