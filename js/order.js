// Coupon code button disable initially
const couponCode = document.getElementById('coupon-code');
couponCode.disabled = true;

// Add event listener for the coupon code button only once
document.getElementById('coupon-code-btn').addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-code');
    const fieldTotalPrices = document.getElementById('total-prices');
    const TotalPrices = parseFloat(fieldTotalPrices.innerText);
    if (couponCode.value === 'SELL200') {
        const discount = (TotalPrices * 20) / 100;

        // Push discount prices
        const discountField = document.getElementById('discount-prices');
        discountField.innerText = discount.toFixed(2);

        // Update total pay after discount
        const totalPay = document.getElementById('total-pay');
        const discountedTotalPrices = TotalPrices - discount;
        totalPay.innerText = discountedTotalPrices.toFixed(2);
    }
    else
    {
        alert('Incorrect Coupon Code');
    }
});

function productPurchase(nameId, productPricesId) {
    // Get product name
    const productPurchaseName = document.getElementById(nameId);
    const textAccessoriesNameValue = productPurchaseName.innerText;

    // Get product prices
    const textProductPrices = document.getElementById(productPricesId);
    const textProduct1PricesValues = textProductPrices.innerText;
    const productPrices = parseFloat(textProduct1PricesValues);

    
    
    // Push product name into selected products section
    const selectedProduct = document.getElementById('selected-product');

    // Count current children in the selected products section
    const count = selectedProduct.childElementCount;

    const pushSelectedProduct = document.createElement('h3');
    // pushSelectedProduct.innerText = textAccessoriesNameValue;
    pushSelectedProduct.innerHTML = `${count+1}. ${textAccessoriesNameValue}`;
    selectedProduct.appendChild(pushSelectedProduct);

    // Push product prices in total prices section
    const fieldTotalPrices = document.getElementById('total-prices');
    const stringTotalPrices = fieldTotalPrices.innerText;
    const fieldPrices = parseFloat(stringTotalPrices);
    const TotalPrices = fieldPrices + productPrices;
    fieldTotalPrices.innerText = TotalPrices.toFixed(2);

    // Update total pay
    const totalPay = document.getElementById('total-pay');
    totalPay.innerText = TotalPrices.toFixed(2);

    // Enable or disable purchase button based on total prices
    const purchaseBtn = document.getElementById('purchase-btn');
    purchaseBtn.disabled = TotalPrices <= 0;

    // Enable coupon code button if total prices exceed 200
    couponCode.disabled = TotalPrices < 200;
}

// Functions to handle product purchases
function productPurchaseList1() {
    productPurchase('product1-name', 'product1-prices');
}

function productPurchaseList2() {
    productPurchase('product2-name', 'product2-prices');
}

function productPurchaseList3() {
    productPurchase('product3-name', 'product3-prices');
}

function productPurchaseList4() {
    productPurchase('product4-name', 'product4-prices');
}

function productPurchaseList5() {
    productPurchase('product5-name', 'product5-prices');
}

function productPurchaseList6() {
    productPurchase('product6-name', 'product6-prices');
}

function productPurchaseList7() {
    productPurchase('product7-name', 'product7-prices');
}

function productPurchaseList8() {
    productPurchase('product8-name', 'product8-prices');
}

function productPurchaseList9() {
    productPurchase('product9-name', 'product9-prices');
}
