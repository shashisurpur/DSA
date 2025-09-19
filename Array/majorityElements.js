function mejorityElement(nums){
    let candidate = 0
    let count =0
    for(let num of nums){
        if(count === 0){
            candidate = num
        }
        count += (num === candidate) ? 1:-1
    }
    return candidate;
}
// console.log(mejorityElement([2,2,1,1,1,2,2]))


function majorityWithHash(nums){
    let map={}
    let hashMap = new Map();
    for(let num of nums){
        map[num] = map[num] +1 || 1
        hashMap.set(num,hashMap.get(num) +1||1)
        // if(map[num] >Math.floor( nums.length/2)){
        //     return num
        // }
        if(hashMap.get(num) > Math.floor(nums.length/2)){
            return num
        }
    }
}
// console.log(majorityWithHash([2,2,1,1,1,2,2]))