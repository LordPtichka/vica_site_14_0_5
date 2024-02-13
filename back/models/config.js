import { Sequelize } from "sequelize"

import ModelNews from "./modelNews.js"
import ModelRoom from "./modelRoom.js"
import ModelService from "./modelService.js"
import ModelUsers from "./modelUser.js"

const SequelizeCreate = new Sequelize({
  logging: false, // убрал вывод в консоли при создании базы данных
  dialect: "sqlite",
  storage: "./bd.sqlite",
})

const dataNews = ModelNews(SequelizeCreate)
const dataRoom = ModelRoom(SequelizeCreate)
const dataService = ModelService(SequelizeCreate)
const dataUsers = ModelUsers(SequelizeCreate)

export default {
  SequelizeCreate,
  dataNews,
  dataRoom,
  dataService,
  dataUsers,
}
