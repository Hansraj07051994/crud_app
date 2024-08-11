require("./module/db")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const {
   get,
   post,
   put,
   remove
} = require("./src/student/student.controller")

app.listen(8080)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/student", get)

app.post("/student", post)

app.put("/student/:id", put)

app.delete("/student/:id", remove)