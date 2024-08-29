const s = 'abc'; const t = "ahcgdb"

let i = 0
let squenceIndex = 0
let res = false
while(i < t.length){
  if(s[squenceIndex] === t[i]){
    squenceIndex += 1
  }
  i += 1
}
if(squenceIndex === s.length){
  res = true
}
console.log(res)
