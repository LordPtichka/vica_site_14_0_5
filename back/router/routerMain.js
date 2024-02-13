import express from "express"
const router = express.Router()

import main from "../controller/main/auth.js"

router.post("/auth", main.auth)

export default router
