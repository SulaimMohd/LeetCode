let intervals = [[1,3],[8,10],[15,18],[2,6]]

intervals.sort((a, b)=> a[0] - b[0])
let i = 0
let res = []
while(i < intervals.length){
  if( res.length >0 && res[res.length -1][1] >= intervals[i][0]){
    res[res.length -1][1] = Math.max(res[res.length -1][1], intervals[i][1] )
  }else{
    res.push(intervals[i])
  }
  i += 1;
}

console.log(res)