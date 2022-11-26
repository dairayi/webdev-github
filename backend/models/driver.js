let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// mongoose.connect("mongodb://localhost:27017/webdev");
// const db = mongoose.connection;
// const collection = db.collection("drivers");
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully");
// });

let driverSchema = new Schema({
    driverId: Number,
    driverRef: String,
    number: Number,
    code: String,
    forename: String,
    surname: String,
    dob: Date,
    nationality: String,
    url: String
});

let Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;