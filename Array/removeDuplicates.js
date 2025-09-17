function removeDuplicates(nums){
    let trackIndex= 0
    for (let index = 1; index < nums.length ; index++) {
        if(nums[index] !== nums[index +1]){
            trackIndex ++
            nums[trackIndex]= nums[index]
        }
    }
    return trackIndex;
}