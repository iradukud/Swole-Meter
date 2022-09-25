const Workout = require('../models/Workout')

module.exports = {
    //Create a workout and exercises  
    createWorkout: async (req, res) => {
        try {
            await Workout.create({
                muscleTargeted: req.body.muscles,
                date: req.body.date,
                userId: req.user.id,
                workouts: req.body.exercises.split(',').map(x => {
                    return { 'exercise': x.trim(), 'completed': false }
                }) 
            })
            console.log('Workout has been created!')
            res.redirect('/creation')
        } catch (err) {
            console.log(err)
        }
    },
}