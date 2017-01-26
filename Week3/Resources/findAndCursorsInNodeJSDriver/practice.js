
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/crunchbase',function (err,db) {
    assert.equal(err,null);
    console.log("successfully connected to mongo db");
    var query = {"category_code" : "biotech"};
    db.collection('companies').find(query).toArray(function (err,docs) {
        assert.equal(err,null);
        assert.notEqual(docs.length,0);

        docs.forEach(function (doc) {
            console.log(doc.name + "is a " + doc.category_code + " company");


        });
       // db.close();
    })
    /*using cursor*/

    var cursor = db.collection('companies').find(query);

    cursor.forEach(
        function (doc) {
            console.log("doc is " + doc.name);

        },
        function (err) {
            assert.equal(err,null);
            return db.close();
        }
    );



});
