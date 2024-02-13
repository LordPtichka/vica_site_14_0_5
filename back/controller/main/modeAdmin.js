import Model from "../../models/config.js"

const BDoneUser = async (login, password) => {
  const result = await Model.dataUsers.findOne({ where: { login: login, password: password } })
  if (result == null) return result
  return result
}

export default { BDoneUser }
