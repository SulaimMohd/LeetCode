const strs = ["flower","flower","flower"]
let res = ''; let temp = ''; let flag = false;

const lengthArray = strs.map(string=> string.length)
const minLength = Math.min(...lengthArray)
console.log(minLength)

for(let i = 0; i < minLength; i++){
  for(let j =1; j< strs.length; j++){
    if(strs[0][i] !== strs[j][i]){
      flag = true
      break
    }
  }
  if(flag) break;
  res += strs[0][i]
}

console.log(res)
