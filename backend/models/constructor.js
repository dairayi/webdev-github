let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// mongoose.connect("mongodb://localhost:27017/webdev");
// const db = mongoose.connection;
// //const collection = db.collection("drivers");
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully - circuits");
// });

let constructorSchema = new Schema({
    constructorId: String,
    constructorRef: String,
    name: String,
    nationality:String,
    url: String
});

let Constructor = mongoose.model('Constructor', constructorSchema);

module.exports = Constructor;