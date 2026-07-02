function applyDiscount(price, discountPercent) {
    if (discountPercent > 0) {
        return price - (price * discountPercent / 100);
    }

    return price;
}

const originalPrice = 100;
const finalPrice = applyDiscount(originalPrice, 20);

console.log(`Final price: ${finalPrice}`);

// Test cases
console.assert(applyDiscount(100, 20) === 80, "Test 1 Failed");
console.assert(applyDiscount(50, 10) === 45, "Test 2 Failed");
console.assert(applyDiscount(200, 0) === 200, "Test 3 Failed");
console.assert(applyDiscount(100, 100) === 0, "Test 4 Failed");

console.log("All tests passed!");
