var chalk = require('chalk');
class Product{
  constructor(name, price, runningTime){
     this.name = name;
     this.price = price;
     this.runningTime = runningTime
    
  }
   toString(currency, rateCurrency) {
      var currency = currency || '$';
      var rateCurrency = rateCurrency || 1;
      return `${this.name} cost ${this.price * rateCurrency} ${currency} duration: ${this.getDuration()} minutes`;
  }
  getDuration(){
    
      return  this.runningTime;
  }
}
class Book extends Product{
    constructor(name, price, isbn, minDuration, maxDuration){
      super(name,price);
      this.isbn = isbn;
      this.minDuration = minDuration;
      this.maxDuration = maxDuration;
    }
    getDuration(){
     
      return (this.minDuration + this.maxDuration)/2;
    }



}
class DVD extends Product{
    constructor(name, price, moovie,runningTime){
   
      super(name,price,runningTime);
      this.moovie = moovie;
    }
}
class VideoGame extends Product{
    constructor(name, price, platform,minDuration, maxDuration){
      super(name,price);
     this.platform = platform;
     this.minDuration = minDuration;
      this.maxDuration = maxDuration;
    }
    getDuration(){
     
      return (this.minDuration + this.maxDuration)/2;
    }
}
/*
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.toString = function(currency, rateCurrency) {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
    return chalk.yellow(this.name) + ' cost ' + chalk.red(this.price * rateCurrency) + currency;
  }
}

function Book(name, price, isbn) {
  Product.apply(this, [name, price]);
  this.isbn = isbn;
}
Book.prototype = Object.create(Product.prototype, {
  constructor: {value: Book}
});

function DVD(name, price, moovie) {
  Product.apply(this, [name, price]);
  this.moovie = moovie;
}
DVD.prototype = Object.create(Product.prototype, {
  constructor: {value: DVD}
});
function VideoGame(name, price, platform) {
  Product.apply(this, [name, price]);
  this.platform = platform;
}
VideoGame.prototype = Object.create(Product.prototype, {
  constructor: {value: VideoGame}
});
*/

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame : VideoGame
};