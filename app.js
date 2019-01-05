import Express from "express"

let app = Express()

let listener = app.listen(process.env.PORT || 3000, () => {
	console.log("Listening on port: " + listener.address().port)
})

app.enable("trust proxy")
app.use(Express.json())

app.use("/", Express.static("public"))

require("dotenv").config()
require("./app/mongo")

import Router from "./routers"

app.use("/", Router)
