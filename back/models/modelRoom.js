import { Sequelize } from "sequelize"

const ModelRoom = (sequelizeMethod) => {
  const Room = sequelizeMethod.define(
    "room",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category: { type: Sequelize.STRING },
      title: { type: Sequelize.STRING },
      descriptionFull: { type: Sequelize.STRING },
      descriptionShort: { type: Sequelize.STRING },
      price: { type: Sequelize.NUMBER },
      area: { type: Sequelize.STRING },
      capacity: { type: Sequelize.NUMBER },
      imagePath: { type: Sequelize.STRING },
    },
    { timestamps: true }
  )
  return Room
}

export default ModelRoom
