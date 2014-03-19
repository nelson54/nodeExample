# Getting started

```bash
// Install Express generator
npm install generator-express

// Generate a project
yo express --mvc

// Install Restify tooling for Express/Mongoose
npm install express-restify-mongoose --save

```

## Make REST configuration
```
# config/rest.js

var mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
    restify = require('express-restify-mongoose');

module.exports = function(app){
    restify.serve(app, Article);
};
```

## Add rest to application

```javascript
// app.js

require('./config/rest')(app);
```

## Run Application
```
grunt
```

## Tests

```
# Install restify and assert
npm install assert --save
npm install restify --save
```


```javascript
//test/test.js

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
```
