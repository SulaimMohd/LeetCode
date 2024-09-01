let nums = [1,2]

let myMap = new Map()
let res = []
let i = 0
const counterOfN = (n, arr)=> {
  let i = 0;
  let count = 0;
  while(i < arr.length){
    if(arr[i] === n){
      count += 1
    }
    i += 1
  }
  return count
}
while(i < nums.length){
    if(!myMap.has(nums[i])){
        myMap.set(nums[i], 1)
    }else{
        myMap.set(nums[i], myMap.get(nums[i])+1)
    }

    if(myMap.size > 2){
      let newMap = new Map()      
      myMap.forEach((item, key)=> {
        if(item !== 1){
          newMap.set(key, item - 1)
        }
      })
      myMap = newMap
    }
    i += 1  
}
myMap.forEach((item, key)=>{
  if(counterOfN(key, nums) > (nums.length / 3).toFixed(0)){
    res.push(key)
  }
})

console.log(Math.floor((2/3)))