var products = [{pno:1, pname:"watch", pcat:"Accessories", price:2000, stock:true},
{pno:2, pname:"Gel", pcat:"Accessories", price:200, stock:true},
{pno:3, pname:"Tshirt", pcat:"Clothing", price:500, stock:true},
{pno:4, pname:"smart phone", pcat:"Electornics", price:20000, stock:false},
{pno:5, pname:"Jacket", pcat:"Clothing", price:3000, stock:true},
{pno:6, pname:"Earrings", pcat:"Accessories", price:1000, stock:false},
{pno:7, pname:"saree", pcat:"Clothing", price:5000, stock:true}];

exports.allProducts = function(){
    //console.log(products);
   return products;
}
exports.allProductsOnCat = function(cat){
    let arr = [];
    for(let item of products){
        if(item.pcat==cat){
            arr.push(item.pname);
        }
    }
    return arr;
}

exports.allProductsOnPrice = function(a, b){
    let arr = [];
    for(let item of products){
        if(item.price<b &&  item.price>a){
            arr.push(item.pname);
        }
    }
    return arr;
}

exports.allProductsInStock = function(){
    let arr = [];
    for(let item of products){
        if(item.stock){
            arr.push(item.pname);
        }
    }
    return arr;
}
exports.allProductsOutStock = function(){
    let arr = [];
    for(let item of products){
        if(!item.stock){
            arr.push(item.pname);
        }
    }
    return arr;
}