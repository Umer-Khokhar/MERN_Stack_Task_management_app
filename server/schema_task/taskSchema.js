const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["to do", "in progress", "completed"],
    default: "to do",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

taskSchema.pre("save", (next) => {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("tasks", taskSchema);
