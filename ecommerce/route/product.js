const express = require("express")
const router = express.Router();

const { index, store } = require("../controller/product");
const { authenticate } = require("../middleware/auth");

router.get("", index)
router.post("", authenticate, store)

module.exports = router;




