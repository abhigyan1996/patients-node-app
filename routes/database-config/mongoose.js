var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/Patients');
mongoose.connect('mongodb://abhigyankashyap:abhigyan123@ds143039.mlab.com:43039/my-patient-app');

module.exports = mongoose;
