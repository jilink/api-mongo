import express from "express"
import User from "./models/user"
const router = express.Router()

// Get all users
router.get("/users", async (req, res) => {
	const users = await User.find()
	res.send(users)
})

export default router