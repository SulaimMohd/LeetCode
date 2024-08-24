let nums = [0,0,0]
const target = 1
let diff = Infinity
let res = Infinity
nums = nums.sort((a, b)=> a - b)

for(let k = 0; k< nums.length -2; k++){
  let i = k +1;
  let j = nums.length -1;

  while(i < j){
    let sum = nums[k]+nums[i]+nums[j];
    let currentDiff = Math.max(sum, target) - Math.min(sum, target)

    if(currentDiff < diff){
      diff = currentDiff
      res = sum
      
      if(sum < target){
        i++;
        while(nums[i-1] === nums[i]){
          i++
        }
      }
      else{
        j--;
        while(nums[j+1] === nums[j]){
          j--;
        }
      }
    }else{
      if(sum < target){
        i++;
        while(nums[i-1] === nums[i]){
          i++
        }
      }else{
        j--;
        while(nums[j+1]=== nums[j]){
          j--;
        }
      }
    } 
  }
}

console.log(res)