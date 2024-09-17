const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema
({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['pending', 'completed', 'deleted',  'progress'], default: 'pending' },
  project: { type: Schema.Types.ObjectId, ref: 'Project' }
});

module.exports = mongoose.model('Task', TaskSchema);
