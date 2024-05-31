import express from "express"
const router = express.Router()

import reqService from "../controller/service/controllerService.js"

router.get("/id/:id", reqService.getOne) // get one service
router.get("/all", reqService.getAll) // get all service

router.get("/delete/:id", reqService.getDelete) // get delete service

// router.post("/create", reqService.postCreate) // post create service
router.post("/update", reqService.postUpdate) // post update service

export default router
