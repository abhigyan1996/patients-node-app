var express = require('express');
var router = express.Router();

var mongoose = require('./database-config/mongoose.js');
var Patient = require('./models/patients.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/patients', function(req, res, next) {
	var patient = new Patient({
		firstname: req.body.fname,
		lastname: req.body.lname,
		age: req.body.age,
		phone: req.body.pnum,
		gender: req.body.gender,
		description: req.body.desc,
		dateofbirth: req.body.dob
	});
	console.log(patient);
	Patient.create(patient, function(err, patient){
		if(err) {
			if (err.errors.age && err.errors.phone) {
				res.send("Invalid age and phone number");
			}
			if (err.errors.phone) {
				res.send("Invalid phone number");
			}
			else if (err.errors.age) {
				res.send("Invalid age");
			}
		}
		res.redirect('/patientlist');
	});
});

router.get('/patientlist',(req,res) => {
	res.render('index1');
});

router.get('/getpatient', (req,res) => {
	Patient.find(function(err, patients){
		if(err)
			res.send(err);
		res.json(patients);
	})
})



module.exports = router;
