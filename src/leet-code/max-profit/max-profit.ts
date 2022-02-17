export function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

export function maxProfitWrongSolution(prices: number[]): number {
  let i = 0;
  let low = prices[i];
  let high = 0;

  for (i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] < low) {
        i = j;
        low = prices[i];
        high = 0;
      }

      if (high < prices[j]) {
        high = prices[j];
      }
    }
  }

  return high <= 0 || low > high ? 0 : high - low;
}
