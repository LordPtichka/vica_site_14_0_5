import { Sequelize } from "sequelize"

const ModelService = (sequelizeMethod) => {
  const Service = sequelizeMethod.define(
    "service",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      price: { type: Sequelize.NUMBER },
      imagePath: { type: Sequelize.STRING },
    },
    { timestamps: true }
  )
  return Service
}

export default ModelService
