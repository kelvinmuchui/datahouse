// var mongoose = require('mongoose');
// mongoose.connect('mongodb:/localhost/nodeauth');
// var db = mongoose.connection;
//
// //User Schema
// var UserSchema = mongoose.Schema({
//   firstname:
//     {
//       type: String
//     },
//     lastname:
//       {
//         type: String
//       },
//   password:{
//     type:String
//   },
//
//   email:{
//     type: String,
//     index: true
//
//   }
//
// });
//
// var User = module.exports = mongoose.model('User');
//
// module.exports.createUser= function(newUser,callback){
//   newUser.save(callback);
// }
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstname:{type : String, unique: true},
  lastname: {type:  String},
  email:{ type: String},
  password:{ type: String}
});

var User = mongoose.model('myuser', userSchema);
module.exports = User;
