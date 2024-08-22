const s = ''
const map = {}
let front = 0;
let back = 0;
let maxLen = 0;
for(front=0; front<s.length; front++){
  if(map[s[front]] !== undefined && map[s[front]] >= back){
    back = map[s[front]] +1
  }
  map[s[front]] = front

  maxLen = Math.max(maxLen, front - back +1)
}

console.log(maxLen)

