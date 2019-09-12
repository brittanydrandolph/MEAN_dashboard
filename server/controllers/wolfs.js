const mongoose = require("mongoose");
const Wolf = mongoose.model("Wolf");

module.exports = {
    index: function(req, res){
        Wolf.find({}, function(err, wolf){
            if(err){
                console.log("error matching the DB request", err);
            }
            else{
                res.render("index", {info: wolf});
            }
        })
    },

    addWolfpage: function(req, res){
        res.render("new");
    },

    findWolf: function(req,res){
        Wolf.findOne({_id:req.params._id}, function(err, wolf){
            if(err){
                console.log("error at wolf id route", err);
            }
            else{
                res.render("details", {wolf: wolf})
            }
        })
    },


    editWolf: function(req, res){
        Wolf.findOne({_id:req.params._id}, function(err, wolf){
            if(err){
                console.log("Error in wolf edit id route", err);
            }
            else{
                res.render("edit", {wolf:wolf});
                console.log("successfully edited a wolf")
            }
        })
    },

    createWolf: function(req, res){
        var wolf = new Wolf(); 
        wolf.name = req.body.name;
        wolf.age = req.body.age;
        wolf.color = req.body.color;
        wolf.save()
            .then(newWolf => {        
                console.log("successfully added a wolf to the DB")
                res.redirect("/")
            })
            .catch(err => { 
                res.json(err) 
                console.log("error when adding something to wolf")
                res.redirect("/wolf/new")
            })
        },

    updateWolf: function(req,res){
        Wolf.findOne({_id:req.params._id})
            .then( 
                Wolf.update({_id: req.params._id}, {$set: {name: req.body.name, age: req.body.age, color: req.body.color}}, function(err){ 
                    if (err){
                        console.log("error while updating", err)
                    }
                    else {
                        res.redirect("/")
                    }
                }))
            .catch(err => res.json(err))
            },

    destroyWolf: function(req, res){
        console.log("Destroy");
        Wolf.remove({_id:req.params._id})
            .then(deletedWolf => {
                console.log("wolf successfully deleted")
                res.redirect("/")
            })
            .catch(err => res.json(err))
        }
}