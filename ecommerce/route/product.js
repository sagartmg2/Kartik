const express = require("express")
const router = express.Router();

const { index, store, update, remove, updateReview } = require("../controller/product");
const { authenticate, isSeller, isBuyer } = require("../middleware/auth");
const uploadImage = require("../middleware/multer")

router.get("", index)
router.post("", authenticate, isSeller, uploadImage, store)
router.put("/:id", authenticate, isSeller, uploadImage, update)
router.delete("/:id", authenticate, isSeller, remove)
router.put("/:id/reviews", authenticate, isBuyer, updateReview)

module.exports = router;




