let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// mongoose.connect("mongodb://localhost:27017/webdev");
// const db = mongoose.connection;
// //const collection = db.collection("drivers");
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully - circuits");
// });

let circuitSchema = new Schema({
    circuitId: String,
    circuitRef: String,
    name: String,
    location: String,
    country: String,
    lat: String,
    lng: String,
    alt: String,
    url: String
});

let Circuit = mongoose.model('Circuit', circuitSchema);

module.exports = Circuit;