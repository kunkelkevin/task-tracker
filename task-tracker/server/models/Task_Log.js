const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskLogSchema = new Schema({
  duration_minutes: {
    type: Number,
    required: true,
  },
  task: {
    type: Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const TaskLog = mongoose.model('TaskLog', taskLogSchema);

module.exports = TaskLog;