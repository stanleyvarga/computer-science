// TODO TOMORROW - M*n, for each price, compare maximum profit
// with every other price
export function maxProfit(prices: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;
  let max = -1;
  let i = 0;
  let j = 0;

  for (; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      j = i;
    }
  }

  for (j = j + 1; j < prices.length; j++) {
    if (max < prices[j]) {
      max = prices[j];
    }
  }

  max < min && (max = min);
  return max - min;
}
