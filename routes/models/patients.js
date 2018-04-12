var mongoose = require ('mongoose');

var PatientSchema = mongoose.Schema({

	firstname: {
		type: String,
		required: true,
		minlength:1,
		trim: true
	},
	lastname : {
		type: String,
		required: true,
		minlength:1,
		trim: true
	},
	gender : {
		type: String,
		required : true,
	},
	phone : {
		type: Number,
		required : true,
		min : 1111111111,
		max : 9999999999
	},
	age : {
		type: Number,
		required: true,
		min: 0,
		max: 130
	},
	description : {
		type: String
	},
	dateofbirth : {
		type: String
	}
});

module.exports = mongoose.model('Patient', PatientSchema);