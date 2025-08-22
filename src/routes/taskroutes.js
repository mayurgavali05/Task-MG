const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const controller = require('../controllers/taskcontroller');

router.post('/tasks', auth, controller.createTask);
router.get('/tasks', auth, controller.getTasks);
router.get('/tasks/:id', auth, controller.getTaskById);
router.put('/tasks/:id', auth, controller.updateTask);
router.delete('/tasks/:id', auth, controller.deleteTask);

module.exports = router;