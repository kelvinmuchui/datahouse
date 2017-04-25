var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = Schema(
  {
    name:{type: String, required: true, max:50},
    logo:{type: String},
    couch:{type: String},
    legue:{type: String},
    date_formed:{ type: Date, default: Date.now },
  }
);


module.exports = mongoose.model('Team', TeamSchema);
