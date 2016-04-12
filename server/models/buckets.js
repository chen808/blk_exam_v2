// BUCKETS MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// BucketSchema
var BucketSchema = new mongoose.Schema({
	title:String,
	description:String,
	tag_user:String,
	completion:Boolean,
	time: {type: Date, default: Date.now},

	// belongs to User
	_user: {type: Schema.Types.ObjectId, ref:"User"}

});

mongoose.model('Bucket', BucketSchema);
