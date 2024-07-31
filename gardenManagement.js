// Write your code here



//This code is here to make sure our tests work properly. Don't remove or modify this.
module.exports = {
    get soilMoisture() {
      return soilMoisture;
    },
    set soilMoisture(value) {
      soilMoisture = value;
    },
    get isRaining() {
      return isRaining;
    },
    set isRaining(value) {
      isRaining = value;
    },
    get wateringStatus() {
      return wateringStatus;
    },
    set wateringStatus(value) {
      wateringStatus = value;
    },
    get timeOfDay() {
      return timeOfDay;
    },
    set timeOfDay(value) {
      timeOfDay = value;
    },
    get lightStatus() {
      return lightStatus;
    },
    set lightStatus(value) {
      lightStatus = value;
    },
    ...(typeof controlWatering === 'function' && { controlWatering }),
    ...(typeof controlLights === 'function' && { controlLights }),
    ...(typeof adjustSoilMoisture === 'function' && { adjustSoilMoisture })
  };