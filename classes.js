class Plant {
  constructor(
    type,
    isPerennial,
    leafDescription,
    leafColor,
    flowerColor,
    flowerDescription,
    gallonsWaterPerWeek,
    amountOfSunNeeded
  ) {
    this.type = type;
    this.isPerennial = isPerennial;
    this.leafDescription = leafDescription;
    this.leafColor = leafColor;
    this.flowerColor = flowerColor;
    this.flowerDescription = flowerDescription;
    this.gallonsWaterPerWeek = gallonsWaterPerWeek;
    this.amountOfSunNeeded = amountOfSunNeeded;
  }
  describe() {
    let description = `A ${this.type} which has ${this.leafColor} leaves, are ${this.leafDescription}.  The flowers are ${this.flowerColor} ${this.flowerDescription} `;
    return description;
  }
  cloneBlackRose() {
    return new Plant(
      this.type,
      this.isPerennial,
      this.leafDescription,
      this.leafColor,
      this.flowerColor,
      this.flowerDescription,
      this.gallonsWaterPerWeek,
      this.amountOfSunNeeded
    );
  }
}

class Garden {
  constructor(name, listOfPlants) {
    this.name = name;
    this.listOfPlants = listOfPlants;
  }
  describe() {
    let description = `This beautiful ${this.name} contains ${this.listOfPlants.length} various types of plants. It is quite certainly something behold year round. 
    Consisting of ${this.listOfPlants.describePlant}s, it's easy to see why many people adore this garden.`;
    for (let plant of this.listOfPlants) {
      description += plant.describe();
    }

    return description;
  }
}

class Estate {
  constructor() {
    this.roseArbor = new Garden("Rose Arbor", []);
    this.perennialGarden = new Garden("Perennial Garden", []);
    this.slopePlanters = new Garden("Slope Planters", []);
  }
  addPlant(plant) {
    if (plant.type === "rose") {
      this.roseArbor.listOfPlants.push(plant);
    } else if (plant.isPerennial && plant.amountOfSunNeeded <= 5) {
      this.perennialGarden.listOfPlants.push(plant);
    } else {
      this.slopePlanters.listOfPlants.push(plant);
    }
  }
  describe() {
    let description = "This immaculate estate, containing 3 gardens of ";
    for (let gardenItem in this) {
      let garden = this[gardenItem];
      description += garden.describe();
    }
    return description;
  }
  calculateWaterUsagePerWeek() {
    let numGallons = 0;
    for (let gardenItem in this) {
      let garden = this[gardenItem];
      for (let plant of garden.listOfPlants) {
        numGallons += plant.gallonsWaterPerWeek;
      }
    }
    return numGallons;
  }
  cloneAllTheRosesAndChangeTheirColors() {
    let clonedRoses = [];
    for (let rose of this.roseArbor.listOfPlants) {
      let clonedRose = rose.clone();
      clonedRoses.push(clonedRose);
    }
    this.roseArbor.listOfPlants = this.roseArbor.listOfPlants.concat(
      clonedRoses
    );
  }
}
let rose = new Plant(
  "rose",
  true,
  "rounded with a point",
  "green",
  "black",
  "concentric circles of petals",
  0.8,
  4
);

let anotherRose = new Plant(
  "rose",
  true,
  "pointed with a square end",
  "green",
  "blue",
  "concentric circles of petals",
  2,
  4
);

let roseGroup = [rose, anotherRose];
let estate = new Estate();
estate.addPlant(rose);
estate.addPlant(anotherRose);
estate.cloneAllTheRosesAndChangeTheirColors();
console.log(estate);
// let roseArbor = new Garden("Rose Arbor", roseGroup);

// console.log(rose.describe());
// console.log(rose.cloneBlackRose());
// console.log(roseArbor.describe());
// console.log(estate.calculateWaterUsagePerWeek());
