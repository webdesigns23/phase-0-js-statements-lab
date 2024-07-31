// Write your code here
let soilMoisture = 30;
let isRaining = false;
let wateringStatus = 'off';
let timeOfDay = "morning";
let lightStatus = "off";

function controlWatering() {
  if (soilMoisture < 40 && !isRaining) {
    wateringStatus = "on";
  } else {
    wateringStatus = "off";
  }
}

function controlLights() {
  if (timeOfDay === "evening" || timeOfDay === "night") {
    lightStatus = "on";
  } else {
    lightStatus = "off";
  }
}

function adjustSoilMoisture() {
  while (wateringStatus === "on" && soilMoisture < 40) {
    soilMoisture += 5;
  }
}



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