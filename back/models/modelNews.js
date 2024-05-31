import { Sequelize } from "sequelize"

const ModelNews = (sequelizeMethod) => {
  const News = sequelizeMethod.define(
    "news",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      imagePath: { type: Sequelize.STRING },
      category: { type: Sequelize.STRING },
      status: { type: Sequelize.STRING },
    },
    { timestamps: true }
  )
  return News
}

export default ModelNews
