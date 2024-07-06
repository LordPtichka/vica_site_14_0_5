import controllerBD from "./modelData.js"

// ========================================
// =======> GET <==========> GET <=========
// =======> ALL <==========> ALL <=========
const getOne = async (req, res) => {
  const result = await controllerBD.BDoneService(req.params.id)
  if (result == null) return res.json(`объект с id < ${req.params.id} >, не найден`)
  res.json(result)
}
// =======================================
const getName = async (req, res) => {
  const result = await controllerBD.BDnameService(req.params.name)
  if (result == null) return res.json(`объект с name < ${req.params.name} >, не найден`)
  res.json(result)
}

// =======> ALL <==========> ALL <=========
const getAll = async (req, res) => {
  const result = await controllerBD.BDallService()
  res.json(result)
}
// =======> DELETE <========> DELETE <=====
const getDelete = async (req, res) => {
  console.log(req.params.id)
  const result = await controllerBD.BDdeleteService(req.params.id)
  res.json({ data: `service delete ${req.params.id}` })
}

// ========================================
// =======> POST <==========> POST <=======
// =======> CREATE <========> CREATE <=====
const postCreate = async (req, res) => {
  const result = await controllerBD.BDcreateService(req.body)
  res.status(200).json(`service create`)
}
// =======> UPDATE <========> UPDATE <=====
const postUpdate = async (req, res) => {
  const result = await controllerBD.BDupdateService(req.body, req.body.id)
  if (result == null) return res.json(`объект с id: ${req.body.id}, не найден`)
  res.status(200).json(`service update`)
}

export default { getOne, getName, getAll, getDelete, postCreate, postUpdate }
