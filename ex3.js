
    
    var mongodb = require('mongodb');
    
    
    var mongo = mongodb.MongoClient,
   
     test = require('assert');
   
     
    mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
      // db gives access to the database
      if (err) throw err
        // var collection = db.collection('parrots');
    var collection = db.collection('docs');
   
    collection.find(
      
      {age: {$gt: parseInt(process.argv[2], 10)}},
      {name: 1, age: 1, _id: 0}
    ).toArray(function(err, documents) {
    console.log(documents)
    })
    
    db.close();
    
    
    })
   
   
