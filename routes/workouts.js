const express = require("express")
const router = express.Router()
const workoutController = require("../controllers/workout")
const { ensureAuth, ensureGuest } = require("../middleware/auth")



router.post("/create", workoutController.createWorkout)
router.post("/createSet/:id", workoutController.createSet)



module.exports = router
