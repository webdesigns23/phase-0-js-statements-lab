### Lab: Automated Garden Management System

**Estimate Completed Time: 30-60 min.**

**Objective:**
In this lab, you will apply your knowledge of JavaScript statements to create a program that simulates an automated garden management system. You will use selection and repetition statements to control various aspects of the garden, such as watering plants, controlling garden lights, and adjusting the soil moisture level.

### Overview

**Scenario:**
You are a junior developer working for a smart home technology company. Your task is to implement features that manage and control various garden devices based on sensor data and user inputs. This involves checking conditions and iterating through device settings to maintain the garden automatically.

### Tools and Resources

- Code Editor (e.g., Visual Studio Code)
- Node.js and npm installed

### Instructions

1. **Fork and Clone the Repository:**
   - Fork the provided GitHub repository.
   - Clone the forked repository to your local machine.

2. **Install Dependencies:**
   - Run `npm install` to install the necessary dependencies.

3. **Initial Setup:**
   - Open the `gardenManagement.js` file in your code editor.

4. **Run Tests:**
   - Run `npm test` to execute the tests and see that all tests are currently failing.
   - As you write your code, run `npm test` to check if you are passing the tests.

5. **Define Variables:**
   - Define a variable using `let` called `soilMoisture` and set its value to 30.
   - Define a variable using `let` called `isRaining` and set its value to false.
   - Define an empty variable using `let` called `wateringStatus`.
   - Define a variable using `let` called `timeOfDay` and set its value to "morning".
   - Define a variable using `let` called `lightStatus` and set its value to "off".

6. **Create Functions for Controlling the Garden:**

   **Control Watering:**
   - Create a function called `controlWatering`.
   - Inside this function, if the `soilMoisture` is less than 40 and `isRaining` is false, set `wateringStatus` to "on".
   - If the `soilMoisture` is 40 or more, or `isRaining` is true, set `wateringStatus` to "off".

   **Control Garden Lights:**
   - Create a function called `controlLights`.
   - Inside this function, if the `timeOfDay` is "evening" or "night", set `lightStatus` to "on".
   - If the `timeOfDay` is "morning" or "afternoon", set `lightStatus` to "off".

   **Adjust Soil Moisture:**
   - Create a function called `adjustSoilMoisture`.
   - Inside this function, if `wateringStatus` is "on", increase `soilMoisture` by 5 until it reaches 40.
   - Use a while loop to implement this functionality.
