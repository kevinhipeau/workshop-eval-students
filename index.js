var store = require ('./src/store').store;

store.open();
console.log(store.findProducts(["price"],[10]))