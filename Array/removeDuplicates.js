function removeDuplicates(nums){
    let trackIndex= 0
    for (let index = 1; index < nums.length ; index++) {
        if(nums[index] !== nums[trackIndex]){
            trackIndex ++
            nums[trackIndex]= nums[index]
        }
    }
    return trackIndex +1;
}
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))