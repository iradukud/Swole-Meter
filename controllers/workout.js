const Workout = require('../models/Workout')
const Sets = require('../models/Sets')

module.exports = {
    //Create a workout and with a list of exercises  
    createWorkout: async (req, res) => {
        try {
            await Workout.create({
                muscleTargeted: req.body.muscles.split(','),
                date: req.body.date,
                userId: req.user.id,
                workouts: req.body.exercises.split(',').map(x => {
                    return { 'exercise': x.trim() }
                })
            })
            console.log('Workout has been created!')
            res.redirect('/creation')
        } catch (err) {
            console.log(err)
        }
    },
    //create a set for the selected exercise
    createSet: async (req, res) => {
        //console.log(req.body.exercise)
        const exercise = req.params.id
        try {
            await Sets.create({
                userId: req.user.id,
                exercise: req.body.exercise,
                workoutId: exercise,
                weight: (req.body.weight).split(),
                set: (req.body.set).split(),
                repetitions: (req.body.rep).split(),
            })
            console.log('Set created!')
            res.redirect('/workout')
        } catch (err) {
            console.log(err)
        }
    },
    //add a set for the selected exercise 
    addSet: async (req, res) => {
        console.log(req.body.weight)
        console.log(req.params.id)
        const setID = req.params.id
        try {
            await Sets.findOneAndUpdate({ _id: req.params.id }, {
                $push: {
                    weight: req.body.weight,
                    set: req.body.set,
                    repetitions: req.body.rep
                }
            })
            console.log('Set added!')
            res.redirect('/workout')
        } catch (err) {
            console.log(err)
        }
    },
    //delete a set for the selected exercise 
    deleteSet: async (req, res) => {
        const setID = req.params.id
        try {
            await Sets.findOneAndUpdate({ _id: setID }, {
                $pull: {
                    weight: req.body.weight,
                    set: req.body.set,
                    repetitions: req.body.rep
                }
            })
            //delete whole document if set's array is empty (could use repetitions/weight arrays as conditions too)  
            await Sets.findOneAndDelete({ _id: setID, set: { $exists: true, $size: 0 } })
            console.log('Set deleted!')
            res.redirect('/workout')
        } catch (err) {
            console.log(err)
        }
    },
    //edit a set for the selected exercise 
    editSet: async (req, res) => {
        const setID = req.params.id
        try {
            await Sets.findOneAndUpdate({ _id: setID }, {
                $set: { 'set.$[i]': req.body.newSet, 'weight.$[j]': req.body.newWeight, 'repetitions.$[k]': req.body.newRep },
            }, {
                arrayFilters: [{ 'i': req.body.set }, { 'j': req.body.weight }, { 'k': req.body.rep }]
            })
            console.log('Set edited!')
            res.redirect('/workout')
        } catch (err) {
            console.log(err)
        }
    }
}