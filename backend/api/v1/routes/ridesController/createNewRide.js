const Rides = require("../../storage/classes/RidesData");

module.exports = async function crateNewRide(req, res) {
  try {
    const data = req.body;
    if (Rides.create(data)) res.send(data).status(201);
    else res.sendStatus(400);
  } catch (error) {
    res.sendStatus(500);
  }
};
