// USERS MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// UserSchema
var UserSchema = new mongoose.Schema({
	user_name:String,

	// creating association to bucket
	buckets: [{type: Schema.Types.ObjectId, ref:'Bucket'}]
}); // end of UserSchema


mongoose.model('User', UserSchema);