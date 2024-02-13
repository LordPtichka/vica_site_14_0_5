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
router.post("/upload", upload.single("image"), postServiceCreate)
