function moveZeros(num){
    let left=0
    let right=0;

    while(right < num.length){
        if(num[right] !== 0){
            [num[left],num[right]]= [num[right],num[left]]
            left++
        }
        right ++;
    }
    return num
}

function moveZerosAlternate(num){
    let zeroFoundAt=0;
    for(let i=0; i<num.length; i++){
        if(num[i] !== 0){
            [num[zeroFoundAt],num[i]] = [num[i],num[zeroFoundAt]]
            zeroFoundAt ++;
        }
    }
    return num
}