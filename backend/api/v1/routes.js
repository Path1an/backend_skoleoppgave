const router = require("express").Router();

router.use("/users", require("./routes/users.js"));
router.use("/stations", require("./routes/stations.js"));
router.use("/rides", require("./routes/rides.js"));

module.exports = router;
