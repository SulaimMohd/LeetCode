

function allConstruct(target, wordBank){
  const n = target.length
  const table = new Array(n+1).fill().map(item => [])
  table[0][0] = []

  for(let i =0; i <= target.length; i++){
    for(let word of wordBank){
      if(word === target.slice(i, i + word.length)){
        let newPath = table[i].map(path => [...path, word])
        table[i+ word.length] = [...table[i + word.length], ...newPath]
      }
    }
  }

  return table[n]
}





console.log(allConstruct("purple", ["pur", "p", "le", "ur", "ple"]))
