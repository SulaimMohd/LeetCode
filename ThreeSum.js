let nums = [-1,0,1,2,-1,-4]
target = 0

let k = 0;
let res = []

nums.sort((a, b)=> a - b)


while(k < nums.length - 2){
  let i = k+1;
  let j = nums.length -1

  while(i<j){
    let sum = nums[k]+nums[i]+nums[j];

    if(sum > target){
      j -= 1;
    }else if(sum < target){
      i += 1;
    }else{
      res.push([nums[k], nums[i], nums[j]])
      i += 1;
    }
  }
  k++;
  while(nums[k-1] === nums[k]){
    k++
  }
}

console.log(res)