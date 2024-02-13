import Model from "../../models/config.js"

// =======> FIND ONE <======> FIND ONE <===
const BDoneService = async (id) => {
  const result = await Model.dataService.findOne({ where: { id: id } })
  if (result == null) return result
  return result
}
// =======> FIND ALL <======> FIND ALL <===
const BDallService = async () => {
  const result = await Model.dataService.findAll({ raw: true })
  return result
}

// =======> DELETE <========> DELETE <=====
const BDdeleteService = async (id) => {
  const result = Model.dataService.destroy({ where: { id: id } })
  return result
}

// =======> CREATE <========> CREATE <=====
const BDcreateService = async (data) => {
  const result = await Model.dataService.create({
    title: data.title,
    description: data.description,
    price: data.price,
    imagePath: data.imagePath,
  })
  return result.dataValues
}

// =======> UPDATE <========> UPDATE <=====
const BDupdateService = async (data, id) => {
  const result = await Model.dataService.findOne({ where: { id: id } })
  if (result == null) return result
  await result.update({
    title: data.title,
    description: data.description,
    price: data.price,
    imagePath: data.imagePath,
  })
  return await result.dataValues
}

export default { BDoneService, BDallService, BDdeleteService, BDcreateService, BDupdateService }
