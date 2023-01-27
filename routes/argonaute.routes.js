const express = require("express");
const router = express.Router();

const argonauteCtrl = require("../controllers/argonaute.controllers");

router.get("/", argonauteCtrl.getArgonautes);
router.post("/", argonauteCtrl.AddArgonaute);
router.delete("/:argonauteId", argonauteCtrl.DeleteArgonaute);

module.exports = router;
