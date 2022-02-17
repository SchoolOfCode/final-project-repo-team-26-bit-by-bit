import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/reminders", function (req, res, next) {

  res.json({ message: "I wish we had some information to give you ☹️" });
});

router.get("/reminders/:id", function (req, res, next) {

    res.json({ message: "I wish we had some information to give you ☹️" });
  });
  

export default router;
