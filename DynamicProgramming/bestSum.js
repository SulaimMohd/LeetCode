
function bestSum(target, nums){
  if(target === 0) return []
  if(target < 0) return null

  let bestSolution = null

  for(let num of nums){
    let res = bestSum(target - num, nums)

    if(res){
      res = [...res, num]
      if(bestSolution === null || res.length < bestSolution.length ){
        bestSolution = res
      }
    }
  }

  return bestSolution
}






console.log(bestSum(8,[2, 7, 3, 5, 8]))