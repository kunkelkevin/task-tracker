const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;