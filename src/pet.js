const maximumFitness = 10
const startingAge = 0
const startingHunger = 0
const minimumHunger = 0

function Pet(name) {
    this.name = name;
    this.age = startingAge;
    this.hunger = startingHunger;
    this.fitness = maximumFitness
    this.children = []
}

Pet.prototype = {
    get isAlive () {
            const alive =  this.age < 30 && this.hunger < 10 && this.fitness > 0;
            if (alive) { return true }
            return false  
    },     

    growUp: function() {
        if (!this.isAlive) {
            throw new Error ('Your pet is no longer alive');
        }

        this.age += 1
        this.hunger += 5
        this.fitness -= 3
    },

    walk: function() {
        if (!this.isAlive) {
            throw new Error ('Your pet is no longer alive');
        };

       (this.fitness < 7 ? this.fitness += 4 : this.fitness = maximumFitness)
    },

    feed: function() {
        if (!this.isAlive) {
            throw new Error ('Your pet is no longer alive');
        };

        (this.hunger > 2 ? this.hunger -= 3 : this.hunger = minimumHunger)
    },

    checkUp: function() {
        const checkUpFitness = this.fitness < 3
        const checkUpHunger = this.hunger > 5

        if (checkUpFitness && checkUpHunger){
            return 'I am hungry AND I need a walk'
        }

        if (checkUpFitness){
            return 'I need a walk'
        }  
        
        if (checkUpHunger){
            return 'I am hungry'
        }

        if (!checkUpHunger && !checkUpFitness){
            return 'I feel great'
        }
    },

    adoptAChild: function(childName) {
        this.children.push(childName)
    },

    haveABaby: function(babyName) {
        const baby = new Pet (babyName);
        this.children.push(baby);
    }
};

module.exports = Pet;