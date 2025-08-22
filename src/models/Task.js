const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Task = sequelize.define('Task', {
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
title: { type: DataTypes.STRING, allowNull: false },
description: { type: DataTypes.TEXT },
status: { type: DataTypes.ENUM('pending', 'completed'), defaultValue: 'pending' },
}, { timestamps: true });

Task.belongsTo(User, { foreignKey: 'ownerId' });
User.hasMany(Task, { foreignKey: 'ownerId' });

module.exports = Task;
