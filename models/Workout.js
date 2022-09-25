const mongoose = require("mongoose")

const WorokoutSchema = new mongoose.Schema({
  muscleTargeted: { type: String, required: true },
  date: { type: String, required: true },
  userId: { type: String, required: true },
  workouts: { type: Array, required: true },
  Rating: { type: String, default: 'okay' },
})

module.exports = mongoose.model('Workout', WorokoutSchema, 'workouts')