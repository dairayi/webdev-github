let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// mongoose.connect("mongodb://localhost:27017/webdev");
// const db = mongoose.connection;
// const collection = db.collection("users");
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully");
// });
let userSchema = new Schema({
    username: String,
    password: String,
    favdriver: String,
    favconstructor: String,
    favcircuit: String
});
let User = mongoose.model('User', userSchema);
module.exports = User;
