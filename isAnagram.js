const s = 'racecar'
const t = 'carrece'

let map1 = new Map()
let map2 = new Map()

let i = 0

while(i < s.length){

  if(!map1.has(s[i])){
    map1.set(s[i], 1)
  }else{
    map1.set(s[i], map1.get(s[i])+1)
  }
  if(!map2.has(t[i])){
    map2.set(t[i], 1)
  }else{
    map2.set(t[i],map2.get(t[i])+1 )
  }
  i += 1
}
map1.forEach((item, index) =>{
  if(!map2.has(index) || item !== map2.get(index)){
    console.log(false)
  }
})

