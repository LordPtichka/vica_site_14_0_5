import controllerBD from "./modelData.js"

// ========================================
// =======> GET <==========> GET <=========
// =======> ALL <==========> ALL <=========
const getOne = async (req, res) => {
  const result = await controllerBD.BDoneRoom(req.params.id)
  if (result == null) return res.json(`объект с id: ${req.params.id}, не найден`)
  res.json(result)
}

// =======> ALL <==========> ALL <=========
const getAll = async (req, res) => {
  const result = await controllerBD.BDallRoom()
  res.json(result)
}
// =======> DELETE <========> DELETE <=====
const getDelete = async (req, res) => {
  console.log(req.params.id)
  const result = await controllerBD.BDdeleteRoom(req.params.id)
  res.json({ data: `room delete ${req.params.id}` })
}

// ========================================
// =======> POST <==========> POST <=======
// =======> CREATE <========> CREATE <=====
const postCreate = async (req, res) => {
  const result = await controllerBD.BDcreateRoom(req.body)
  res.status(200).json(`room create`)
}
// =======> UPDATE <========> UPDATE <=====
const postUpdate = async (req, res) => {
  const result = await controllerBD.BDupdateRoom(req.body, req.body.id)
  if (result == null) return res.json(`объект с id: ${req.body.id}, не найден`)
  res.status(200).json(`room update`)
}

export default { getOne, getAll, getDelete, postCreate, postUpdate }
