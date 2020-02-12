const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
    name: { type: String },
    email: { type: String},
    tel: { type: String} 
   },{
       collection: 'contact'
});

module.exports = mongoose.model('Contact', Contact);