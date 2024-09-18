function howSum(target, nums){
  if(target === 0) return []
  if(target < 0) return null

  let res = []

  for(let num of nums){
    res = howSum(target-num, nums)
    if(res){
      res = [...res, num]
      return res
    }
  }
  return res
}




console.log(howSum(7, [2, 3, 5, 7]))