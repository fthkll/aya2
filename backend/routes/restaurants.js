const router = require(`express`).Router();

router.route("/").get((req,res) => res.send("Hello Fatih"));

module.exports = router;