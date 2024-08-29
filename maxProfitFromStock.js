const prices = [7,1,5,3,6,4]

let [buyPoint, sellPoint, maxProfit] = [0, 1, 0]

while(sellPoint < prices.length){
  console.log(prices[buyPoint])
  if(maxProfit < prices[sellPoint] - prices[buyPoint]){
    maxProfit = prices[sellPoint] - prices[buyPoint]
  }
  if(prices[buyPoint] > prices[sellPoint]){
    buyPoint = sellPoint
  }

  sellPoint += 1
}

console.log(maxProfit)