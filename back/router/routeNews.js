import express from "express"
const router = express.Router()

import reqNews from "../controller/news/controllerNews.js"

router.get("/id/:id", reqNews.getOne) // get one news
router.get("/all", reqNews.getAll) // get all news

router.get("/delete/:id", reqNews.getDelete) // get delete news

router.post("/create", reqNews.postCreate) // post create news
router.post("/update", reqNews.postUpdate) // post update news

// =======================

export default router
