var WorkoutModel = require('../models/WorkoutModel.js');

/**
 * WorkoutController.js
 *
 * @description :: Server-side logic for managing Workouts.
 */
module.exports = {

    /**
     * WorkoutController.list()
     */
    list: function (req, res) {
        WorkoutModel.find(function (err, Workouts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Workout.',
                    error: err
                });
            }
            return res.json(Workouts);
        });
    },

    /**
     * WorkoutController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        WorkoutModel.findOne({_id: id}, function (err, Workout) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Workout.',
                    error: err
                });
            }
            if (!Workout) {
                return res.status(404).json({
                    message: 'No such Workout'
                });
            }
            return res.json(Workout);
        });
    },

    /**
     * WorkoutController.create()
     */
    create: function (req, res) {
        var Workout = new WorkoutModel({
			name : req.body.name,
			excercises : req.body.excercises

        });

        Workout.save(function (err, Workout) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Workout',
                    error: err
                });
            }
            return res.status(201).json(Workout);
        });
    },

    /**
     * WorkoutController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        WorkoutModel.findOne({_id: id}, function (err, Workout) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Workout',
                    error: err
                });
            }
            if (!Workout) {
                return res.status(404).json({
                    message: 'No such Workout'
                });
            }

            Workout.name = req.body.name ? req.body.name : Workout.name;
			Workout.excercises = req.body.excercises ? req.body.excercises : Workout.excercises;
			
            Workout.save(function (err, Workout) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Workout.',
                        error: err
                    });
                }

                return res.json(Workout);
            });
        });
    },

    /**
     * WorkoutController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        WorkoutModel.findByIdAndRemove(id, function (err, Workout) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Workout.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
