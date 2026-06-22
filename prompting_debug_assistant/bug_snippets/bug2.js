function applyDiscount(price, discountPercent) {
    if (discountPercent > 0) {
        return price + (price * discountPercent / 100);
    }

    return price;
}

const originalPrice = 100;
const finalPrice = applyDiscount(originalPrice, 20);

console.log(`Final price: ${finalPrice}`);
