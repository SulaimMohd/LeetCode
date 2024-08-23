let nums = [2,7,11,15, 10];
const target = 9
let i = 0; let j = nums.length-1;
let res = [];


nums = nums.sort((a, b) => a - b)

while(i<j){
  let sum = nums[i]+nums[j]
  if(sum > target){
    j -= 1;
  }else if(sum < target){
    i += 1;
  }else{
    res = [i+1, j+1]
    break;
  }
}

console.log(res)