const express = require('express');
const router = express.Router();
const WorkoutController = require('../controllers/WorkoutController.js');

/*
 * GET
 */
router.get('/', WorkoutController.list);

/*
 * GET
 */
router.get('/:id', WorkoutController.show);

/*
 * POST
 */
router.post('/', WorkoutController.create);

/*
 * PUT
 */
router.put('/:id', WorkoutController.update);

/*
 * DELETE
 */
router.delete('/:id', WorkoutController.remove);

module.exports = router;
