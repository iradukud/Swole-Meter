const mongoose = require("mongoose")

const WorokoutSchema = new mongoose.Schema({
  muscleTargeted: { type: Array, required: true },
  date: { type: String, required: true },
  userId: { type: String, required: true },
  workouts: { type: Array, required: true },
  rating: { type: String, default: 'okay' },
  completed : { type: Boolean, default: 'false' },
})

module.exports = mongoose.model('Workout', WorokoutSchema, 'workouts')