var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showMoons = function () {
        this.moons.forEach(function (moon, index) {
            console.log("(" + index + ") " + moon);
        });
    };
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        console.log("Moons:");
        this.showMoons();
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon); // Adds moon to the beginning of the array
    };

    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return "Invalid moon index.";
        }
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.addMoon("Ganymede"); // Additional moon for planet1

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");
planet2.addMoon("Proteus"); // Additional moon for planet2

var planet3 = new Planet("Mercury", 1, "Terrestrial");
planet3.addMoon("Caloris"); // Additional moon for planet3

[planet1, planet2, planet3].forEach(function (planet) {
    planet.showPlanet();
});

// Test getMoon method
console.log(planet1.getMoon(1)); // Europa
console.log(planet2.getMoon(0)); // Triton
console.log(planet3.getMoon(2)); // Caloris
console.log(planet1.getMoon(3)); // Invalid moon index.
