var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg" },
    {name: "Granite Hill", image: "https://pixabay.com/get/52e7d0454d55a814f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg" },
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg" },
    {name: "Granite Hill", image: "https://pixabay.com/get/52e7d0454d55a814f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg" },
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg" },
    {name: "Granite Hill", image: "https://pixabay.com/get/52e7d0454d55a814f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg" },
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e5074417d2b79d2964ccd_340.jpg"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(3000, function() {
    console.log("YelpCamp server has started!");
});