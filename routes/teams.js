// var express = require('express');
// var router= express.Router();
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
//
//
// router.use(bodyParser.urlencoded({ extended: true }))
// router.use(methodOverride(function(req, res){
//       if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//         // look in urlencoded POST bodies and delete it
//         var method = req.body._method
//         delete req.body._method
//         return method
//       }
// }))
//
//
// //build the REST operations at the base for blobs
// //this will be accessible from http://127.0.0.1:3000/blobs if the default route for / is left unchanged
// router.route('/')
//     //GET all blobs
//     .get(function(req, res, next) {
//         //retrieve all blobs from Monogo
//         mongoose.model('Team').find({}, function (err, teams) {
//               if (err) {
//                   return console.error(err);
//               } else {
//                   //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
//                   res.format({
//                       //HTML response will render the index.jade file in the views/blobs folder. We are also setting "blobs" to be an accessible variable in our jade view
//                     html: function(){
//                         res.render('teams/index', {
//                               title: 'All teams',
//                               "teams" : teams
//                           });
//                     },
//                     //JSON response will show all blobs in JSON format
//                     json: function(){
//                         res.json(infophotos);
//                     }
//                 });
//               }
//         });
//     })
//     //POST a new blob
//     .post(function(req, res) {
//
//         // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
//         var name = req.body.name;
//         var log = req.body.log;
//         var dob = req.body.dob;
//         var couch = req.body.couch;
//         //call the create function for our database
//         mongoose.model('Team').create({
//             name : name,
//             log : log,
//             dob : dob,
//             couch : couch
//         }, function (err, team) {
//               if (err) {
//                   res.send("There was a problem adding the information to the database.");
//               } else {
//                   //Blob has been created
//                   console.log('POST creating new team: ' + team);
//                   res.format({
//                       //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
//                     html: function(){
//                         // If it worked, set the header so the address bar doesn't still say /adduser
//                         res.location("teams");
//                         // And forward to success page
//                         res.redirect("/teams");
//                     },
//                     //JSON response will show the newly created blob
//                     json: function(){
//                         res.json(team);
//                     }
//                 });
//               }
//         })
//     });
