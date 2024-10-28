export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((total, item) => total + item.count * item.price, 0);
  if (applyDiscount) {
    return sum * 0.891;
  }
  return sum;
/*   let result = 0;
  for (let i = 0; i < purchases.length; i += 1) {
    result += purchases[i].count * purchases[i].price;
  }
  return result; */
}
