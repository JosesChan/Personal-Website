import express from "express"
import cors from "cors"
import webData from "./api/webData.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/web_data", webData)
app.use("*", (req,res) => res.status(404).json({error:"not found"}))

export default app