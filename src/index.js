import 'dotenv/config';
import express from "express"
import mongoose  from "mongoose"
import routes from "./routes"

const app = express()

const PORT = process.env.PORT || 3000


const mongoDB = process.env.URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		const app = express()
    app.use(routes)


		app.listen(PORT, () => {
			console.log("Server has started!")
		})
	})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));