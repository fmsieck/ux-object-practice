/*
    Object Practice

    Gardening!

    You were hired to work as a landscaper for a large estate.

    See garden.jpg

    The owner wants you to help them organize their gardens.

    They have decided there will be three gardens: the rose arbor, 
    the perennial garden, and the slope planters.

    You want to use your newly learned programming skills to make
    this job easier.  

    Complete the following exercises to make your work on the garden easier.
*/

/*
    Note, To run the tests for an exercise run the entire file!
    Do not just highlight a section and try to run it, because the tests will
    throw an exception 
    ReferenceError: createdPopulatedEstate is not defined

    If you see that exception, make sure you deselect any text and then click Run Code again

    Remember to Save the file before you click Run Code!
*/
/**
 * createPlant - Produces an object respresenting a plant.  It should have the following properties:
 * @param {string} type - The Type of plant.  Possible values are [ "rose", "orchid", "lily", "lavender", "poppy", "begonia", "snapdragon", "marigold"]
 * @param {boolean} isPerennial - A boolean showing if the plant is a perennial or not
 * @param {string} leafDescription - A visual description of the leaves
 * @param {string} leafColor - A string representing the leaf color
 * @param {string} flowerColor - A string representing the color of the flower
 * @param {string} flowerDescription - A visual description of the flower
 * @param {number} gallonsWaterPerWeek - 0.0 to 3.0, representing the number of gallons of water needed per week for the plant
 * @param {number} amountOfSunNeeded - 0 to 10, representing the amount of sun needed
 */
function createPlant(
  type,
  isPerennial,
  leafDescription,
  leafColor,
  flowerColor,
  flowerDescription,
  gallonsWaterPerWeek,
  amountOfSunNeeded
) {
  let plant = {
    type: type,
    isPerennial: isPerennial,
    leafDescription: leafDescription,
    leafColor: leafColor,
    flowerColor: flowerColor,
    flowerDescription: flowerDescription,
    gallonsWaterPerWeek: gallonsWaterPerWeek,
    amountOfSunNeeded: amountOfSunNeeded,
  };

  // Your Code Here!
  // Create a plant object, populate it with all of the values from the arguments, and return it.
  // Hint: You can name every key in your object the same as the variable from the argument to this function.
  return plant;
}

createPlant("rose", true, "jagged leaves", "green", "green", "circular", 2, 7);

function createEstate() {
  let estate = {
    roseArbor: [],
    perennialGarden: [],
    slopePlanters: [],
  };
  return estate;
}

/**
 * addPlantToEstate
 * @param {Object} estate - The estate object - created by calling createEstate()
 * @param {Object} plant - A plant object - created by calling createPlant()
 *
 * This should add the given plant into one of the three arrays within the estate.
 */
let plant = createPlant(
  "orchid",
  false,
  "broad leaf",
  "green",
  "green",
  "short",
  0.75,
  4
);
let estate = createEstate();
function addPlantToEstate(estate, plant) {
  // Your Code Here!
  // decide where to put the plant according to its features
  /*
    if the plant is a rose
        add it to the Rose Arbor
    if the plant is a perennial and it needs less <= 5 sun
        add it to the Perennial Garden
    else add it to the Slope Planters
    */
  if (plant.type === "rose") {
    estate.roseArbor.push(plant);
  } else if (plant.isPerennial && plant.amountOfSunNeeded <= 5) {
    estate.perennialGarden.push(plant);
  } else {
    estate.slopePlanters.push(plant);
  }
}

/**
 * describePlant
 * @param {*} plant - A plant object
 *
 * Given a plant, this should return a string that is the description of the plant.
 * The description should use at least a few of the properties on the plant to form a sentence.
 *
 * Example: "A Rose which has green leaves that are rounded with a point.  The flowers are red concentric circles of pedals. "
 */
function describePlant(plant) {
  let description = `The eye-catching ${plant.type} is one of those types of classic flowers. Its ${plant.flowerDescription} makes it a stand-out amongst other flowers.
  Also worth noting is its particular vivid ${plant.flowerColor} color as well as its distinguishable leaf pattern -- ${plant.leafDescription}. `;
  // Your Code Here!
  // Return a string describing all the visual features of the given plant
  return description;
}

/**
 * describeGarden
 * @param {String} gardenName - The name of the garden to describe
 * @param {Object[]} listOfPlants - The List of plants to be described.
 *
 * // Example: "The Rose Garden has 10 types of plants in it.  It contains: A"
 */
function describeGarden(gardenName, listOfPlants) {
  let description = `This beautiful ${gardenName} contains ${listOfPlants.length} various types of plants. It is quite certainly something behold year round. 
  Consisting of ${listOfPlants.describePlant}s, it's easy to see why many people adore this garden.`;
  for (let plant of listOfPlants) {
    description += describePlant(plant);
  }
  // Your Code Here!
  // Given a list of plants, describe every plant in the list.
  // return a string which is the description.
  // Hint: You can just call describePlant() for each plant in the list
  // Concatenting the description for each plant together into one big string.
  return description;
}

/**
 * describeEstate
 * @param {Object} estate - An estate object
 * Return a string describing all the different visual features of all the gardens in the estate.
 * This should describe every garden and every plant.
 */
function describeEstate(estate) {
  let description = "This immaculate estate, containing 3 gardens of ";
  for (let gardenName in estate) {
    let listOfPlants = estate[gardenName];
    description += describeGarden(gardenName, listOfPlants);
  }
  // Your Code Here!
  // Return a string describing all the different visual features of all the gardens in the estate.
  // Feel free to make up various details.
  // Hint: You can call describeGarden() for each garden of the estate.
  return description;
}

/**
 * calculateWaterUsagePerWeek
 * @param {Object} estate - An estate object
 *
 * This should return a number which is the total number of gallons of water
 * needed for the whole estate.
 *
 * Make a loop for each garden to tally the number of gallons needed by all the plants, then
 * add those up to get the total water usage.
 */
function calculateWaterUsagePerWeek(estate) {
  let numGallons = 0;
  // Your Code Here!
  for (let gardenName in estate) {
    let listOfPlants = estate[gardenName];
    for (let plant of listOfPlants) {
      numGallons += plant.gallonsWaterPerWeek;
    }
  }
  // console.log(Math.floor(numGallons));
  return Math.floor(numGallons);
}

/**
 * cloneRose
 * @param {Object} plant - A plant object
 *
 * This should return a new object, which is a clone of the given plant.
 * The clone should have identitcal properties to the given plant, except for the color.
 *
 * Every clone should run changeColorOfPlant(clone)
 * This will use the botanist's special algorithm to make new colors of roses.
 *
 */
function cloneRose(plant) {
  let clone = {};
  // Your Code Here!
  for (let itemValue in plant) {
    clone[itemValue] = plant[itemValue];
  }
  // Given a plant, clone it and return the new plant
  // Hint: You do this in the Reading!  copyObject...

  changeColorOfPlant(clone);
  return clone;
}

/**
 * cloneAllTheRosesAndChangeTheirColors
 * @param {Object} estate - An estate object
 *
 * This should attempt to clone every rose and add the plant to the garden.
 * Just watch out for flawed plants!  Don't attempt to clone flawed plants.
 * Otherwise you will produce flowerless roses.
 */
function cloneAllTheRosesAndChangeTheirColors(estate) {
  // Your Code Here!
  // for each rose...
  // Hint: Watch out for modifying an array you are currently looping through!  How can you avoid that?
  // Instead of putting the new plants immediately into the rose arbor, maybe store them in a new array
  // until you have finished iterating.  Then you can add them in after your loop finishes.
  let clonedRoses = [];
  for (let rose of estate.roseArbor) {
    let clonedRose = cloneRose(rose);
    clonedRoses.push(clonedRose);
  }
  estate.roseArbor = estate.roseArbor.concat(clonedRoses);
}

//
// DO NOT CHANGE ANYTHING IN THIS
/**
 * changeColorOfPlant
 * @param {Object} plant
 * The Owner's proprietary color changing algorithm.
 * Given a plant, this genetically changes the color.
 *
 * However!  Due to a flaw in the color changing process, there is a chance that a rose will become flawed
 * after changing the color.
 * If you attempt to modify a flawed flower, it will produce a flowerless
 * plant.
 */
function changeColorOfPlant(plant) {
  let newColors = [
    "Amber",
    "Crimson",
    "Aqua",
    "Cerulean Blue",
    "Flamingo",
    "Gun Smoke",
    "Jade",
    "Merigold",
    "Mustard",
    "Periwinkle",
  ];
  // ~~ Magic Genetic Engineering ~~
  let randIndex = Math.floor(Math.random() * newColors.length);

  if (plant.isFlawed) {
    plant.flowerDescription = "wilted sad buds with no pedals.";
    plant.flowerColor = null;
  } else {
    plant.flowerColor = newColors[randIndex];
  }

  let randomChance = Math.floor(Math.random() * 3);
  if (randomChance < 1) {
    plant.isFlawed = true;
  }
}
