const Task = require('../models/Task');

exports.createTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const task = await Task.create({ title, description, status, ownerId: req.user.id });
    res.status(201).json(task);
  } catch (err) { next(err); }
};

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ where: { ownerId: req.user.id }, order: [['createdAt', 'DESC']] });
    res.json(tasks);
  } catch (err) { next(err); }
};

exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findOne({ where: { id: req.params.id, ownerId: req.user.id } });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) { next(err); }
};

exports.updateTask = async (req, res, next) => {
  try {
    const [updated] = await Task.update(req.body, { where: { id: req.params.id, ownerId: req.user.id } });
    if (!updated) return res.status(404).json({ message: 'Task not found' });
    const task = await Task.findByPk(req.params.id);
    res.json(task);
  } catch (err) { next(err); }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const deleted = await Task.destroy({ where: { id: req.params.id, ownerId: req.user.id } });
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) { next(err); }
};