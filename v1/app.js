var express = require("express");
var app = express();
var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/52e3d5404957a514f1dc84609620367d1c3ed9e04e5074417d2e7ed2924acd_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/55e8dc404f5aab14f1dc84609620367d1c3ed9e04e5074417d2e7ed2924acd_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417d2e7ed2924acd_340.jpg"}
]

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {

});

app.listen(3000, function() {
    console.log("YelpCamp server has started!");
});