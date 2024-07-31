// test/gardenManagement.test.js
const garden = require('../gardenManagement');

describe('Garden Management Variables', () => {
  test('soilMoisture should be defined and have the initial value of 30', () => {
    expect(garden.soilMoisture).toBeDefined();
    expect(garden.soilMoisture).toBe(30);
  });

  test('isRaining should be defined and have the initial value of false', () => {
    expect(garden.isRaining).toBeDefined();
    expect(garden.isRaining).toBe(false);
  });

  test('wateringStatus should be defined and have the initial value of "off"', () => {
    expect(garden.wateringStatus).toBeDefined();
    expect(garden.wateringStatus).toBe('off');
  });

  test('timeOfDay should be defined and have the initial value of "morning"', () => {
    expect(garden.timeOfDay).toBeDefined();
    expect(garden.timeOfDay).toBe('morning');
  });

  test('lightStatus should be defined and have the initial value of "off"', () => {
    expect(garden.lightStatus).toBeDefined();
    expect(garden.lightStatus).toBe('off');
  });
});

describe('controlWatering function', () => {
  beforeEach(() => {
    // Reset to default values before each test
    garden.soilMoisture = 30;
    garden.isRaining = false;
    garden.wateringStatus = 'off';
  });

  test('should turn watering on when soilMoisture is less than 40 and it is not raining', () => {
    garden.soilMoisture = 30;
    garden.isRaining = false;
    garden.controlWatering();
    expect(garden.wateringStatus).toBe('on');
  });

  test('should turn watering off when soilMoisture is 40 or more', () => {
    garden.soilMoisture = 40;
    garden.isRaining = false;
    garden.wateringStatus = 'on'
    garden.controlWatering();
    expect(garden.wateringStatus).toBe('off');
  });

  test('should turn watering off when it is raining', () => {
    garden.soilMoisture = 30;
    garden.isRaining = true;
    garden.controlWatering();
    expect(garden.wateringStatus).toBe('off');
  });
});

describe('controlLights function', () => {
  beforeEach(() => {
    // Reset to default values before each test
    garden.timeOfDay = "morning";
    garden.lightStatus = "off";
  });

  afterEach(() => {
    // Reset to default values after each test
    garden.timeOfDay = "morning";
    garden.lightStatus = "off";
  });

  test('should turn lights on when timeOfDay is evening', () => {
    garden.timeOfDay = "evening";
    garden.controlLights();
    expect(garden.lightStatus).toBe('on');
  });

  test('should turn lights on when timeOfDay is night', () => {
    garden.timeOfDay = "night";
    garden.controlLights();
    expect(garden.lightStatus).toBe('on');
  });

  test('should turn lights off when timeOfDay is morning', () => {
    garden.timeOfDay = "morning";
    garden.lightStatus = 'on'
    garden.controlLights();
    expect(garden.lightStatus).toBe('off');
  });

  test('should turn lights off when timeOfDay is afternoon', () => {
    garden.timeOfDay = "afternoon";
    garden.lightStatus = 'on'
    garden.controlLights();
    expect(garden.lightStatus).toBe('off');
  });
});

describe('adjustSoilMoisture function', () => {
  beforeEach(() => {
    // Reset to default values before each test
    garden.soilMoisture = 30;
    garden.wateringStatus = 'off';
  });

  afterEach(() => {
    // Reset to default values after each test
    garden.soilMoisture = 30;
    garden.wateringStatus = 'off';
  });

  test('should increase soilMoisture by 5 until it reaches 40 when watering is on', () => {
    garden.soilMoisture = 30;
    garden.wateringStatus = 'on';
    garden.adjustSoilMoisture();
    expect(garden.soilMoisture).toBe(40);
  });

  test('should not increase soilMoisture if watering is off', () => {
    garden.soilMoisture = 30;
    garden.wateringStatus = 'off';
    garden.adjustSoilMoisture();
    expect(garden.soilMoisture).toBe(30);
  });

  test('should not increase soilMoisture above 40', () => {
    garden.soilMoisture = 35;
    garden.wateringStatus = 'on';
    garden.adjustSoilMoisture();
    expect(garden.soilMoisture).toBe(40);
  });
});
