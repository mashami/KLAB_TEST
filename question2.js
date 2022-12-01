//Question2 1.
const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, 
{name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500},
 {name: 'Computer', price:1000}, ];
//  1 . Filter and show the product that will be 
//  bought when you don't have much money I mean Cheap one
var ch = null;
for(let i = 0; i < item.length; i++) {
    if(item[i].price < ch) {
        ch = item[i].price;
    }
}

console.log("The cheapest product is: " + ch);


//Question2 2.

//2 . Filter and show the product that will be expensive in the array

var exp = null;
for(let i = 0; i < item.length; i++) {
    if(item[i].price > exp) {
        exp = item[i].price;
    }
}

console.log("The most expensive product is: " + exp);

//Question2 3.
//3 . Calculate the full price of all product combined
var SumProduct = 0;
for(let i = 0; i < item.length; i++) {
    SumProduct += item[i].price
}

console.log("Sum of price of product is: " + SumProduct);

//Question2 4.

//4 . Calculate the full price of all product combined and remove product that are under the 10 dollar

var  SumProduct= 0;
for(let i = 0; i < item.length; i++) {
    if(item[i].price >= 10) {
        SumProduct += item[i].price
    }
}

console.log("The Sum of price of Items without prices under 10 price is: " + SumProduct);