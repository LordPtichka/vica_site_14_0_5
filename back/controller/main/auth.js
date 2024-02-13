import controllerBD from "./modeAdmin.js"
import jwt from "jsonwebtoken"

const auth = async (req, res) => {
  console.log(req.body)
  const result = await controllerBD.BDoneUser(req.body.Log, req.body.Pas)
  console.log(result)
  const token = jwt.sign({ foo: "bar", iat: Math.floor(Date.now() / 1000) - 30 }, "VictoriaSite")
  console.log(token)
  res.json({ secret: token })
}

export default { auth }
