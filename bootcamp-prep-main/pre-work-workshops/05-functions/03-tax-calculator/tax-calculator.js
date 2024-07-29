// YOUR CODE BELOW
function taxCalculator(price, state) {
  let aftarTaxPrice;
  if (state === "NY") {
    let price1 = price + price * 0.04;
    aftarTaxPrice = price1;
  } else if (state === "NJ") {
    let price2 = price + price * 0.06625;
    aftarTaxPrice = price2;
  }
  return aftarTaxPrice;
}

taxCalculator(100, "NY"); // => 104
taxCalculator(100, "NJ"); // => 106.625
