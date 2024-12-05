const fs = require("fs");
const path = require("path");

const dataPath = path.resolve(__dirname, "../data/rides.json");
const parsedRides = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
console.log(parsedRides);

class Rides {
  async findAll() {
    return parsedRides.map(({ id, name, method }) => ({ id, name, method }));
  }

  async findById(id) {
    return parsedRides.find((data) => data.id === id);
  }

  async findOne(object) {
    return parsedRides.find((data) => data === object);
  }

  async create(data) {
    if (!data.name || data.method) return false;

    const id = parsedRides.length;

    const prevId = parsedRides[parsedRides.length - 1].id;

    parsedRides.push({ ...data, id: prevId + 1 });
    return true;
  }

  async updateById(id) {
    const index = parsedRides.findIndex((data) => data.id === id);
    parsedRides[index] = data;
  }

  async deleteById(id) {
    const index = parsedRides.findIndex((data) => data.id === id);

    if (!index) return false;

    parsedRides.splice(index, 1);
    return true;
  }
}

module.exports = new Rides();
