const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema
({
  title: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date
});

module.exports = mongoose.model('Project', ProjectSchema);
