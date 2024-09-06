

function move(m, n, memo = {}){
  if(m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  let key = m + ',' + n
  if(key in memo) return memo[key]

  memo[key] = move(m -1, n) + move(m, n-1);
  return memo[key]
}

console.log(move(3, 3))