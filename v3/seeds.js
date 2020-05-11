var mongoose = require("mongoose");
var campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417c2e79d19748c3_340.jpg", 
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa", 
        image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2e79d19748c3_340.jpg", 
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor", 
        image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e5074417c2e79d19748c3_340.jpg", 
        description: "blah blah blah"
    }
]
function seedDB() {
    campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("removed campgrounds!");

        // add a few campgrounds
        data.forEach(function(seed) {
            campground.create(seed, function(err, campground) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("added a campground");
                    Comment.create({
                        text: "This place is great, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment) {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Create new comment");
                        }
                    });
                }
            });
        });
    });

    // add a few comments
}

module.exports = seedDB;