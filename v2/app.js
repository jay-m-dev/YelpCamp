var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// fix deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create({
    name: "Granite Hill",
    image: "https://pixabay.com/get/52e7d0454d55a814f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg",
    description: "This is a huge granite hill, no bathrooms. No water, Beautiful granite!"
}, function(err, campground) {
    if(err){
        console.log(err);
    } else {
        console.log("newly created campground: ");
        console.log(campground);
    }
});

// Campground.create({
//     name: "Salmon Creek",
//     image: "https://pixabay.com/get/52e7d0454d55a814f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg"
// }, function(err, campground) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("newly created campground: ");
//         console.log(campground);
//     }
// });

app.get("/", function(req, res) {
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {
    // res.render("campgrounds", {campgrounds: campgrounds});
    // get all campgrounds from DB
    Campground.find({}, function(err, campgrounds) {
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:campgrounds});
        }
    });
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // campgrounds.push(newCampground);
    // create new campground and save to DB
    Campground.create(newCampground, function(err, campgrounds) {
        if(err){
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res) {
    // find the campground with privided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            // render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})
app.listen(3000, function() {
    console.log("YelpCamp server has started!");
});