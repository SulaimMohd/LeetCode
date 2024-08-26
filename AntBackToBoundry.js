const array = [1, 3, 4, -8]

let sum = 0;
let count = 0;

for(let i =0 ; i< array.length; i++){
  sum += array[i]
  if(sum === 0){
    count += 1
  }
}

console.log(count)