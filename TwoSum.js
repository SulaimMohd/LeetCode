const map = {}
const res = []
nums = [2,7,11,15]
let target = 9
for(let i =0; i< nums.length ; i++){
  console.log(map[nums[i]])
  if(map[nums[i]] !== undefined){
      res.push(map[nums[i]])
      res.push(i)
  }else{
      map[target - nums[i]] = i
  }
}
console.log(map)
console.log(res)