// var inventoryDB = db.getSiblingDB('inventory');
// inventoryDB.createCollection('items');

// inventoryDB.createUser({
//     user: "mongoadmin2",
//     pwd: "password",
//     roles: [{ role: "readWrite", db: "inventory" }]
// });
// var products = [
//     { product: "headphones", price: 20, date: "March 30, 2024" },
//     { product: "macbook", price: 1000, date: "March 30, 2024" },
//     { product: "mouses", price: 15, date: "March 30, 2024" }
// ];

// var result = inventoryDB.items.insertMany(products);
//-------

var inventoryDB = db.getSiblingDB('inventory');
inventoryDB.createCollection('items');

inventoryDB.createUser({
    user: "mongoadmin2",
    pwd: "password",
    roles: [{ role: "readWrite", db: "inventory" }],,
  mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
});
var productsJsonFilePath = "/usr/src/app/data/products.json";
var jsonData = load(productsJsonFilePath);
var result =  inventoryDB.items.insertMany(docs);
