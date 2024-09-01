let arr = [1,0,2,3,0,4,5,0]

let i = 0

while(i < arr.length){

  if(arr[i] === 0){
    let j = arr.length -1
    while(j > i  ){
      arr[j] = arr[j-1]
      j -= 1
    }
    i += 1
  }
  i += 1
}

console.log(arr)

let map = {
  name: 'some name'
}



