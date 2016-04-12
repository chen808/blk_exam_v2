// User CONTROLLER

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bucket = mongoose.model('Bucket');


module.exports = (function(){

	return {

		newBucket: function(req, res){
			// 1) create the user in database
			User.create({ user_name:req.body.user_name }, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					console.log('Successfully created user name');
				}
			})

			// 2) associate the bucket list with user by finding user first
			User.findOne({ user_name:req.body.user_name }, function(err, user){
				var bucket = new Bucket({ title:req.body.title, description:req.body.description, tag_user:req.body.tag_user });

				bucket._user = user._id;

				user.buckets.push(bucket);

				bucket.save(function(err){
					user.save(function(err){
						if(err){
							console.log('error');
						}
						else{
							console.log('Successfully created bucket list');
						}
					})
				})
			})
		},

		getAllBucket: function(req, res){
			User.find({})
				.populate('buckets')
				.exec(function(err, bucket){
					res.json('bucket', {bucket});
				})
		},


		getUsers: function(req, res){
			User.find({}, function(err, results){
				if(err){
					console.log('error');
				}
				else{
					res.json(results);
				}
			})
		},


		getUserProfile: function(req, res){
			User.findOne({_id:req.params.id})
				.populate('buckets')
				.exec(function(err, bucket){
					res.json('bucket', {bucket});
				})
		},





	}






})();