let nums =[6,5,5]


let currentElement = null
let count = 0

for(let i = 0; i< nums.length; i++){
  if(count === 0){
    currentElement = nums[i]
    count += 1
  }else{
    if(currentElement !== nums[i]){
      count -= 1
    }else{
      count += 1
    }
  }
  
}
console.log(currentElement)