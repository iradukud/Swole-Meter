const Workout = require('../models/Workout')
const Sets = require('../models/Sets')

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs")
  },
  getProgress: (req, res) => {
    res.render("progress sheet.ejs")
  },
  getCreation: (req, res) => {
    res.render("workout creation.ejs")
  },
  getPlan: async (req, res) => {
    try {
      const workoutItems = await Workout.find({ userId: req.user.id })
      const SetRep = await Sets.find({ userId: req.user.id })
      res.render('exercising.ejs', { workout: workoutItems, user: req.user, reps: SetRep, })
    } catch (err) {
      console.log(err)
    }
  }
}
