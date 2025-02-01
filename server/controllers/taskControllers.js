const mongoose = require("mongoose");
const tasksSchema = require("../schema_task/taskSchema");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await tasksSchema.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "failed to fetch tasks" });
  }
};

const getTaskById = async (req, res) => {
  try {
    const tasks = await tasksSchema.findById(req.params.id);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Failed to get a task" });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, assignee, status, createdAt, updatedAt } =
      req.body;
    let emptyField = [];

    if (!title || !description || !assignee || !status) {
      emptyField.push(
        title ? "" : "title",
        description ? "" : "description",
        assignee ? "" : "assignee",
        status ? "" : "status"
      );
    }
    if (emptyField.length > 0) {
      return res.status(400).json({error: "Please Input All the fields", emptyField});
    }
    const newTask = await tasksSchema.create({
      title,
      description,
      assignee: assignee,
      status,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Failed to created new task" });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await tasksSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: "Failed to update task" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTask = await tasksSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTask);
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task" });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
