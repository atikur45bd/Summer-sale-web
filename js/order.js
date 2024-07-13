const couponCode = document.getElementById('coupon-code');

couponCode.disabled = true;

function accessoriesName1() {
    // get Accessories Name
    const textAccessoriesName = document.getElementById('accessories-name');
    const textAccessoriesNameValue = textAccessoriesName.innerText;
    // get Product prices
    const textProduct1Prices = document.getElementById('product1-Prices');
    const textProduct1PricesValues = textProduct1Prices.innerText;
    const productPrices = parseFloat(textProduct1PricesValues);
    // console.log(productPrices);
    // push product name into purses section
    const selectedProduct = document.getElementById('selected-product');
    const pushSelectedProduct = document.createElement('h3');
    pushSelectedProduct.innerText = textAccessoriesNameValue;
    selectedProduct.appendChild(pushSelectedProduct);
    // push product prices in purses section
    const fieldTotalPrices = document.getElementById('total-prices');
    const stringTotalPrices = fieldTotalPrices.innerText;
    const fieldPrices = parseFloat(stringTotalPrices);
    const TotalPrices = fieldPrices + productPrices;
    fieldTotalPrices.innerText = TotalPrices;
}

function productPurchase(nameId, productPricesId) {
    // get product name
    const productPurchaseName = document.getElementById(nameId);
    const textAccessoriesNameValue = productPurchaseName.innerText;
    // get product prices
    const textProductPrices = document.getElementById(productPricesId);
    const textProduct1PricesValues = textProductPrices.innerText;
    const productPrices = parseFloat(textProduct1PricesValues);
    // push product name into purses section
    const selectedProduct = document.getElementById('selected-product');
    const pushSelectedProduct = document.createElement('h3');
    pushSelectedProduct.innerText = textAccessoriesNameValue;
    selectedProduct.appendChild(pushSelectedProduct);
    // push product prices in purses section
    const fieldTotalPrices = document.getElementById('total-prices');
    const stringTotalPrices = fieldTotalPrices.innerText;
    const fieldPrices = parseFloat(stringTotalPrices);
    const TotalPrices = fieldPrices + productPrices;
    fieldTotalPrices.innerText = TotalPrices;
   
    
}


function productPurchaseList1() {
   
    productPurchase('product1-name','product1-prices');
}
function productPurchaseList2() {
   
    productPurchase('product2-name','product2-prices');
}
function productPurchaseList3() {
   
    productPurchase('product3-name','product3-prices');
}
function productPurchaseList4() {
   
    productPurchase('product4-name','product4-prices');
}
function productPurchaseList5() {
   
    productPurchase('product5-name','product5-prices');
}

function productPurchaseList6() {
   
    productPurchase('product6-name','product6-prices');
}
function productPurchaseList7() {
   
    productPurchase('product7-name','product7-prices');
}
function productPurchaseList8() {
   
    productPurchase('product8-name','product8-prices');
}
function productPurchaseList9() {
   
    productPurchase('product9-name','product9-prices');
}

