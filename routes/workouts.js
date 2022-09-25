const express = require("express")
const router = express.Router()
const workoutController = require("../controllers/workout")
const { ensureAuth, ensureGuest } = require("../middleware/auth")



router.post("/create", workoutController.createWorkout)




module.exports = router
