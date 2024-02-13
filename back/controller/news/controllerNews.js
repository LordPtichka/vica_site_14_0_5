import controllerBD from "./modelData.js"

// ========================================
// =======> GET <==========> GET <=========
// =======> ALL <==========> ALL <=========
const getOne = async (req, res) => {
  console.log(req.query.id)
  const result = await controllerBD.BDoneNews(req.params.id)
  if (result == null) return res.json(`объект с id: ${req.params.id}, не найден`)
  res.json(result)
}

// =======> ALL <==========> ALL <=========
const getAll = async (req, res) => {
  const result = await controllerBD.BDallNews()
  res.json(result)
}
// =======> DELETE <========> DELETE <=====
const getDelete = async (req, res) => {
  console.log(req.params.id)
  const result = await controllerBD.BDdeleteNews(req.params.id)
  res.json({ data: `news delete ${req.params.id}` })
}

// ========================================
// =======> POST <==========> POST <=======
// =======> CREATE <========> CREATE <=====
const postCreate = async (req, res) => {
  console.log(req.body)
  const result = await controllerBD.BDcreateNews(req.body)
  res.status(200).json(`news create`)
}
// =======> UPDATE <========> UPDATE <=====
const postUpdate = async (req, res) => {
  const result = await controllerBD.BDupdateNews(req.body, req.body.id)
  if (result == null) return res.json(`объект с id: ${req.body.id}, не найден`)
  res.status(200).json(`news update`)
}

export default { getOne, getAll, getDelete, postCreate, postUpdate }
