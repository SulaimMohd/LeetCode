const string = 'aaaba';
let maxLength = 0; const map = {}
let front = 0;let rear = 0;


for( ;front < string.length; front++){
  if(map[string[front]] !== undefined && map[string[front]] >= rear){
    rear = map[string[front]] +1
  }
  map[string[front]] = front

  maxLength = Math.max(maxLength, front - rear +1)
}

console.log(maxLength)
