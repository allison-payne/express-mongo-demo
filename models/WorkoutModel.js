var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var WorkoutSchema = new Schema({
	'name' : String,
	'excercises' : Array
});

module.exports = mongoose.model('Workout', WorkoutSchema);
