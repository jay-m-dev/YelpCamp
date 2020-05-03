var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// add a new cat to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat) {
//     if(err) {
//         console.log("something went wrong!");
//     } else {
//         console.log("we saved a cat to the DB");
//         console.log(cat);
//     }
// });
//retrieve all cats from the DB and console.log each one

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats) {
    if(err){
        console.log("oh no, error!");
        console.log(err);
    } else {
        console.log("all the cats");
        console.log(cats);
    }
})