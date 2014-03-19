var assert = require('assert');
var restify = require('restify');


var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

var article = {title: 'An Article', url: '/fakeurl', text: 'Text for an article'};

client.post('/api/v1/Articles', article, function (err, req, res, obj) {
    assert.ifError(err);
    _id = obj._id;
    console.log('Server created: %j', obj);
    return obj;
});

