function canSum(target, nums, memo = {}){
  if (target in memo) return memo[target]
  if (target === 0) return true
  if (target < 0 ) return false

  let i = 0;

  while(i < nums.length){
    if (canSum(target - nums[i], nums, memo)){
       memo[target] = true
       return memo[target]
    }
    i++
  }
  memo[target] = false
  return memo[target]

}

console.log(canSum(1000, [3, 4, 6, 1]))