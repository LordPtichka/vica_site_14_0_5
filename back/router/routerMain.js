import express from "express"
import multer from "multer"
const router = express.Router()

import main from "../controller/main/auth.js"

router.post("/auth", main.auth)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/service")
  },
  filename: function (req, file, cb) {
    console.log(file)
    // const ext = path.extname(file.originalname)
    const newFileName = `${file.originalname}`
    cb(null, newFileName)
  },
})
const upload = multer({ storage: storage })
router.post("/upload", upload.single("image"))
// router.post("/upload", upload.single("image"), postServiceCreate)

export default router
