export function maxProfit_N2(prices: number[]): number {
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

export function maxProfit_N(prices: number[]): number {
  let max = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min);
    min = Math.max(min, prices[i]);
  }

  return max;
}

// Sometimes I have a tendency to overcomplicate simple problems
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
