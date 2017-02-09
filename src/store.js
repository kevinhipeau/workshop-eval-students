var chalk = require('chalk');

var Book = require ('./product').Book;
var DVD = require ('./product').DVD;
var VideoGame = require ('./product').VideoGame;
var service = require ('./rateExchangeService').service;

var products = [
  // Books
 new Book('Preacher Book One', 16.59, '978-1401240455', 80, 200),
new Book('JavaScript: The Good Parts', 22.79, '978-0596517748', 105, 265),
new Book('Alice In Wonderland', 6.99, '978-1619490222', 100, 190),
new Book('Harry Potter and the Sorcerer\'s Stone', 6.85, '978-0439708180', 140, 270),
  // DVDs
  new DVD('The God, The Bad, and The Ugly', 12.99, true, 178),
new DVD('Star Wars: A New Hope', 19.99, true, 124),
new DVD('Rogue One: A Star Wars Story', 17.39, true, 120),
new DVD('Alice In Wonderland', 14.99, true, 108),
new DVD('The Wire Season 1', 29.99, false, 780),
new DVD('Breaking Bad: Season 05', 16.49, false, 375),
new DVD('Freaks and Geeks: The Complete series', 54.99, false, 756),
// VideoGames
new VideoGame('FIFA 17', 39.56, 'PlayStation 4', 400, 1600),
new VideoGame('XCOM: Enemy Unknown', 15.00, 'PC', 300, 1800),
new VideoGame('Super Smash Bros Melee', 63.90, 'Game Cube', 300, 2400)
];

function findProducts(obj) {
  var result = [];
  console.log(obj.belowCost)
  
  
  if(obj.belowDuration && obj.belowCost){
     for (var i = products.length - 1; i >= 0; i--) {
      var product = products[i];
      if(product.getDuration() <= obj.belowDuration && product.price <= obj.belowCost ) {
        result.push(product);
      }
    }
  }else if(obj.belowCost) {

    for (var i = products.length - 1; i >= 0; i--) {
      var product = products[i];
      if(product.price <= obj.belowCost) {
        result.push(product);
      }
    }
  
  }else if (bj.belowDuration ){
    for (var i = products.length - 1; i >= 0; i--) {
      var product = products[i];
      if(product.getDuration() <= obj.belowDuration ) {
        result.push(product);
      }
    }
  }

  
  return result;
}

function calculateTotalprice(products) {
  var sum = 0;
  for (var i = products.length - 1; i >= 0; i--) {
    sum += products[i].price;
  }

  return Math.round(sum*100)/100;
}

function toString(currency, rateCurrency) {
  var result = chalk.green('The store is open, ' + products.length + ' articles are available :');
  for (var i = products.length - 1; i >= 0; i--) {
    result += '\n - ' + products[i].toString(currency, rateCurrency);
  }
  console.log("")
  return result;
}

function open() {
  console.log(toString());
}

module.exports = {
  store: {
    products: products,
    findProducts: findProducts,
    calculateTotalprice: calculateTotalprice,
    open: open
  }
};