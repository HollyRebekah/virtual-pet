const maximumFitness = 10

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10 
}

Pet.prototype = {
    growUp: function() {
        this.age += 1
        this.hunger += 5
        this.fitness -= 3
    },

    walk: function() {
       (this.fitness < 7 ? this.fitness += 4 : this.fitness = maximumFitness)
    }
};

module.exports = Pet;