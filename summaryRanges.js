const nums = [0]

const res = []
let start = nums[0];

for(let i = 0; i< nums.length ; i++){
  let current = nums[i]

  if(current+1 !== nums[i+1]){
    if(current === start){
      res.push(`${current}`)
      start = nums[i+1]
    }else{
      res.push(`${start}->${current}`)
      start = nums[i+1]
    }
  }
}

console.log(res)