const express = require("express")
const router = express.Router();

const { index } = require("../controller/product")

router.get("", index )
router.post("", (req, res) => {
    res.send("post request")
})

module.exports = router;




