// test/helper.js

const gardenManagement = require('../gardenManagement');

module.exports = {
  get soilMoisture() {
    return gardenManagement.soilMoisture;
  },
  set soilMoisture(value) {
    gardenManagement.soilMoisture = value;
  },
  get isRaining() {
    return gardenManagement.isRaining;
  },
  set isRaining(value) {
    gardenManagement.isRaining = value;
  },
  get wateringStatus() {
    return gardenManagement.wateringStatus;
  },
  set wateringStatus(value) {
    gardenManagement.wateringStatus = value;
  },
  get timeOfDay() {
    return gardenManagement.timeOfDay;
  },
  set timeOfDay(value) {
    gardenManagement.timeOfDay = value;
  },
  get lightStatus() {
    return gardenManagement.lightStatus;
  },
  set lightStatus(value) {
    gardenManagement.lightStatus = value;
  },
  controlWatering: gardenManagement.controlWatering,
  controlLights: gardenManagement.controlLights,
  adjustSoilMoisture: gardenManagement.adjustSoilMoisture
};
