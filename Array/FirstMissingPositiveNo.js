//By Sorting
function firstMissingPositive(nums){
    nums.sort((a,b)=>a-b)
    let missing=1
    for(let num of nums){
        if(num === missing){
            missing++
        }
    }
    return missing
}
// console.log(firstMissingPositive([7,8,9,11,12]))

//By has SET
function firstMissPosByHashSet(nums){
    let set = new Set(nums)
    let missing=1
    while(set.has(missing)){
        missing++
    }
    return missing
}

// console.log(firstMissPosByHashSet([1,2,0]))