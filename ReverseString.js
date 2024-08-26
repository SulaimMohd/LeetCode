let s = ["h","e","l","l","o"]
let i = 0; let j = s.length -1
let temp;

for(;i < s.length /2 ;i++, j--){
  console.log(i)
  temp = s[i];
  s[i] = s[j];
  s[j] = temp;
    
}
console.log(s)