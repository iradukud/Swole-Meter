const mongoose = require("mongoose")

const SetSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    workoutId: { type: String, required: true },
    exercise: { type: String, required: true },
    set: { type: Array, required: true },
    weight: { type: Array, required: true },
    repetitions: { type: Array, required: true },
})

module.exports = mongoose.model('Set', SetSchema, 'sets')