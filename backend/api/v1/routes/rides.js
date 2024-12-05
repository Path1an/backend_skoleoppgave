const router = require("express").Router();
const getAllRides = require("./ridesController/getAllRides");
const createNewRide = require("./ridesController/createNewRide");

router.get("/", async (req, res) => {
  getAllRides(req, res);
});

router.post("/", (req, res) => {
  createNewRide(req, res);
});

router.put("/", (req, res) => {
  const data = req.body;
  if (Rides.updateById(data.id)) res.sendStatus(200);
  else res.sendStatus(400);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (Rides.deleteById(id)) res.sendStatus(200);
  else res.sendStatus(400);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const data = await Rides.findById(Number(id));
  res.send(data).status(200);
});

module.exports = router;
