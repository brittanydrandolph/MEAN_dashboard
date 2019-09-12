const wolfs = require("../controllers/wolfs");

module.exports = function(app){ 
    app.get("/", wolfs.index)
    app.get("/wolf/new", wolfs.addWolfpage)
    app.get("/wolf/:_id", wolfs.findWolf)
    app.get("/wolf/edit/:_id", wolfs.editWolf)
    app.post("/wolf", wolfs.createWolf)
    app.post("/wolf/:_id", wolfs.updateWolf)
    app.get("/wolf/destroy/:_id", wolfs.destroyWolf)
}
