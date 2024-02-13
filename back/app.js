import { config } from "dotenv"
import "colors"
import express from "express"
import cors from "cors"

config() // .env
const app = express()
app.use(cors())

// =======================================================
app.use(express.json()) // для обработки данных в формате JSON
app.use(express.urlencoded({ extended: true })) // для обработки данных в URL-кодированном виде

// =========> DATA <====================================
import model from "./models/config.js"

// =========> PUBLIC <====================================
app.use(express.static("public"))

// =========> ROUTER <====================================
import routerMain from "./router/routerMain.js"
import routerNews from "./router/routeNews.js"
import routerRoom from "./router/routeRoom.js"
import routerService from "./router/routeRoom.js"

app.use("/", routerMain)
app.use("/news", routerNews)
app.use("/room", routerRoom)
app.use("/service", routerService)

// =========> SERVER <====================================

app.listen(process.env.PORT, async () => {
  await model.SequelizeCreate.sync({ force: false })

  const admin = await model.dataUsers.findOne({ raw: true, where: { role: "admin" } })
  if (admin == null) {
    model.dataUsers.create({ login: "admin", email: "admin", password: "adminTop1", role: "admin" })
    console.log("===> ADMIN СОЗДАН <===".red.bold)
  }

  console.log(`=====> SERVER START <====> PORT: ${process.env.PORT} <=====`.magenta.bold)
})
