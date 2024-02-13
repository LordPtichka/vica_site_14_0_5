import express from "express"
const router = express.Router()

import reqRoom from "../controller/room/controllerRoom.js"

router.get("/id/:id", reqRoom.getOne) // get one room
router.get("/all", reqRoom.getAll) // get all room

router.get("/delete/:id", reqRoom.getDelete) // get delete room

router.post("/create", reqRoom.postCreate) // post create room
router.post("/update", reqRoom.postUpdate) // post update room

export default router
