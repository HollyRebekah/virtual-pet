const maximumFitness = 10
const startingAge = 0
const startingHunger = 0
const minimumHunger = 0

function Pet(name) {
    this.name = name;
    this.age = startingAge;
    this.hunger = startingHunger;
    this.fitness = maximumFitness
}

Pet.prototype = {
    growUp: function() {
        this.age += 1
        this.hunger += 5
        this.fitness -= 3
    },

    walk: function() {
       (this.fitness < 7 ? this.fitness += 4 : this.fitness = maximumFitness)
    },

    feed: function(){
        (this.hunger > 2 ? this.hunger -= 3 : this.hunger = minimumHunger)
    }
};

module.exports = Pet;