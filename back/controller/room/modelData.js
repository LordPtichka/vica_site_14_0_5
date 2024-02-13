import Model from "../../models/config.js"

// =======> FIND ONE <======> FIND ONE <===
const BDoneRoom = async (id) => {
  const result = await Model.dataRoom.findOne({ where: { id: id } })
  if (result == null) return result
  return result
}
// =======> FIND ALL <======> FIND ALL <===
const BDallRoom = async () => {
  const result = await Model.dataRoom.findAll({ raw: true })
  return result
}

// =======> DELETE <========> DELETE <=====
const BDdeleteRoom = async (id) => {
  const result = Model.dataRoom.destroy({ where: { id: id } })
  return result
}

// =======> CREATE <========> CREATE <=====
const BDcreateRoom = async (data) => {
  const result = await Model.dataRoom.create({
    category: data.category,
    title: data.title,
    description: data.description,
    price: data.price,
    imagePath: data.imagePath,
  })
  return result.dataValues
}

// =======> UPDATE <========> UPDATE <=====
const BDupdateRoom = async (data, id) => {
  const result = await Model.dataRoom.findOne({ where: { id: id } })
  if (result == null) return result
  await result.update({
    category: data.category,
    title: data.title,
    description: data.description,
    price: data.price,
    imagePath: data.imagePath,
  })
  return await result.dataValues
}

export default { BDoneRoom, BDallRoom, BDdeleteRoom, BDcreateRoom, BDupdateRoom }
