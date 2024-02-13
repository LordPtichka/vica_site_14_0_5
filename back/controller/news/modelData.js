import Model from "../../models/config.js"

// =======> FIND ONE <======> FIND ONE <===
const BDoneNews = async (id) => {
  const result = await Model.dataNews.findOne({ where: { id: id } })
  if (result == null) return result
  return result
}
// =======> FIND ALL <======> FIND ALL <===
const BDallNews = async () => {
  const result = await Model.dataNews.findAll({ raw: true })
  return result
}

// =======> DELETE <========> DELETE <=====
const BDdeleteNews = async (id) => {
  const result = Model.dataNews.destroy({ where: { id: id } })
  return result
}

// =======> CREATE <========> CREATE <=====
const BDcreateNews = async (data) => {
  const result = await Model.dataNews.create({
    title: data.title,
    description: data.description,
    imagePath: data.imagePath,
  })
  return result.dataValues
}

// =======> UPDATE <========> UPDATE <=====
const BDupdateNews = async (data, id) => {
  const result = await Model.dataNews.findOne({ where: { id: id } })
  if (result == null) return result
  await result.update({
    title: data.title,
    description: data.description,
    imagePath: data.imagePath,
  })
  return await result.dataValues
}

export default { BDoneNews, BDallNews, BDdeleteNews, BDcreateNews, BDupdateNews }
