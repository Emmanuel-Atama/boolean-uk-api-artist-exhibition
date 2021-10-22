require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
/* IMPORT ROUTERS */

const addressRouter = require("./resources/address/router")
const exhibitionRouter = require("./resources/exhibition/router")

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */
app.use("address", addressRouter)
app.use("exhibition", exhibitionRouter)
app.get("*", (req, res) => {
  res.json({ ok: true })
})

/* START SERVER */

const port = process.env.PORT || 4040

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})
