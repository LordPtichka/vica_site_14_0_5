import { Sequelize } from "sequelize"

const ModelUsers = (sequelizeMethod) => {
  const User = sequelizeMethod.define(
    "users",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      login: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      refreshToken: { type: Sequelize.STRING },
      role: { type: Sequelize.STRING },
    },
    { timestamps: true }
  )
  return User
}
export default ModelUsers
