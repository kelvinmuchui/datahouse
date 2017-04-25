var mongoose = require('mongoose');

var schema = mongoose.Schema;

var PlayerSchema = Schema({
  name:{type: String, required: true},
  team:{type: Shema.ObjectId, ref: 'Team'},
  profile_image: {type: String},
  ball_control: {type: Number},
  acceleration: {type: Number},
  balance: {type: Number},
  Jumping: {type: Number},
  Reaction: {type: Number},
  sprint_speed : {type: Number},
  strength: {type: Number},
  age:{type: Number},
  height:{ type: Number},
  weight: {type: Number},
  Weakfoot: {type: String},
  perffered:{type: String},
  foot:{type: String},
  goals: {type: Number},
  scored: {type: Number},
  yellow_card: {type: Number},
  red_card : {type: Number},
  assist: {type: Number}

});


module.exports = mongoose.model('Player', PlayerSchema);
