const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshita:Selenagomez123!@atlascluster.mdcvo4n.mongodb.net/AtlasCluster?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
