const strs = ["eat","tea","tan","ate","nat","bat"]
let map = new Map()
let i = 0
while(i < strs.length) {
  
  
  let key = new Array(26).fill(0)
  
  let j = 0;
  while(j< strs[i].length){

    let index = strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)
    key[index] += 1
    j += 1
  }
  
  key = key.join()
  if(map.has(key)){
    map.set(key, [...map.get(key), strs[i]])
  }else{
    map.set(key, [strs[i]])
  }

  i += 1
}
const res = []

map.forEach(element => {
  res.push(element)
});

console.log(res)

