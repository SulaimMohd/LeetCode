
function allSolutions(target, nums, memo = {}){
  if(target in memo) return memo[target]
  if(target === 0 ) return [[]]
  if(target < 0) return null


  let allSol = []

  for(let num of nums){
    let res = allSolutions(target - num, nums, memo)

    if(res){
      let updatedRes = res.map(sol => [...sol, num])
      allSol = [...allSol, ...updatedRes]
    }
  }
  memo[target] = allSol
  return allSol
}



console.log(allSolutions(8, [2, 4, 4, 5, 3, 7]))