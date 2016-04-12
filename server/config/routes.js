// ROUTES JS

// require tweets controller
var user = require('./../controllers/users.js');



module.exports = function(app){

	// GETS ==================================
	
	app.get('/get_buckets', function(req, res){
		user.getAllBucket(req, res);
	})

	app.get('/getAllUsers', function(req, res){
		user.getUsers(req, res);
	})

	app.get('/getUser/:id', function(req, res){
		user.getUserProfile(req, res, req.params.id);
	})


	// POSTS =================================
	app.post('/new_bucket', function(req, res){
		// send data to backend controller
		user.newBucket(req, res);
	})



}