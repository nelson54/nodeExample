var mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
    restify = require('express-restify-mongoose');

module.exports = function(app){
    restify.serve(app, Article);
};