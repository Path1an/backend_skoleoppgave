const Rides = require("../../storage/classes/RidesData");
module.exports = async function getAllRides(req, res) {
  try {
    res.send(await Rides.findAll()).status(200);
  } catch (error) {
    res.sendStatus(500);
  }
};
