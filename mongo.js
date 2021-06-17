var MongoClient = require('mongodb').MongoClient;
var faker = require('faker');
var conectionURL = 'mongodb://root:example@localhost:27017/test1?authSource=admin';
exports.Insert = (total) => {
  MongoClient.connect(conectionURL,{ useUnifiedTopology: true } , function (err, client) {
  
    if (err) {
      console.log(erro)
    } else {
      const db = client.db("Test1");
      for (let i = 0; i < total; i++) {
        var randomName = faker.name.findName();
      db.collection('prueba1').insertOne({name: randomName.toString()});
    }
    }
  })
};

exports.Select = () => {
  MongoClient.connect(conectionURL,{ useUnifiedTopology: true } , function (err, client) {
  
    if (err) {
      console.log(erro)
    } else {
      const db = client.db("Test1");
      db.collection('prueba1').find({},(err,res)=>{
        if(err){
          console.log(err);
        }
        if(res){
          console.log('mongo respond is ok');
        }
      });
    
    }
  })
};

exports.Update = () => {
  MongoClient.connect(conectionURL,{ useUnifiedTopology: true } , function (err, client) {
  
    if (err) {
      console.log(erro)
    } else {
      const db = client.db("Test1");
      var randomName = faker.name.findName();
      db.collection('prueba1').updateMany({}, {$set: {name: randomName}},(err,res)=>{
        if(err){
          console.log(err);
        }
        if(res){
          console.log('mongo respond is ok');
        }
      });
    
    }
  })
};

exports.Delete = () => {
  MongoClient.connect(conectionURL,{ useUnifiedTopology: true } , function (err, client) {
  
    if (err) {
      console.log(erro)
    } else {
      const db = client.db("Test1");
      var randomName = faker.name.findName();
      db.collection('prueba1').deleteMany({},(err,res)=>{
        if(err){
          console.log(err);
        }
        if(res){
          console.log('mongo respond is ok');
        }
      });
    
    }
  })
};