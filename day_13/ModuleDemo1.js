var products = require("./ProductModule");

var str1 = products.allProducts();

console.log(str1);

var str2 = products.allProductsOnCat("Clothing");

console.log(str2);

var str3 = products.allProductsOnPrice(100, 1000);

console.log(str3);

var str4 = products.allProductsInStock();

console.log(str4);

var str5 = products.allProductsOutStock();

console.log(str5);

