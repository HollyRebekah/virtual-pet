const Pet = require('../src/pet');

describe('constructor', () =>{
    let pet
    beforeEach(() => {
        pet = new Pet('Daphne');
      });

    it('returns an object', () => {
        expect(new Pet('Daphne')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        expect(pet.name).toEqual('Daphne');
    });

    it('has an inital age of 0', () => {
        expect(pet.age).toEqual(0);
    });

    it ('has an initial hunger of 0', () => {
        expect(pet.hunger).toEqual(0);
    });

    it('has an initial fitness of 10', () => {
        expect(pet.fitness).toEqual(10)
    });
});

describe('growUp function', () =>{
    let pet
    beforeEach(() => {
        pet = new Pet('Daphne');
    });

    it('growUp increases age by 1', () => {
        pet.growUp();
        expect(pet.age).toEqual(1)
    });

    it('growUp increases hunger by 5', () =>{ 
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    it('growUp decreases fitness by 3', () => {
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk function', () =>{
    let pet
    beforeEach(() => {
        pet = new Pet('Daphne');
    });

    it('walk increases fitness by 4', () => { 
        pet.growUp()
        pet.growUp()
        pet.walk()
        expect(pet.fitness).toEqual(8);
    });

    it('walk cannot increase fitness higher than 10', () => {
        pet.growUp()
        pet.walk()
        expect(pet.fitness).toEqual(10);
    }); 
});

describe('feed function', () => { 
    let pet
    beforeEach(() => {
        pet = new Pet('Daphne');
    });

    it('feed method decreases hunger by 3', () =>{ 
        pet.growUp()
        pet.feed()
        expect(pet.hunger).toEqual(2)
    });

    it('feed method cannot decrease hunger beyond 0', () => {
        pet.feed()
        expect(pet.hunger).toEqual(0)
    })
});  

describe('checkUp function', () => { 
    let pet
    beforeEach(() => {
        pet = new Pet('Daphne');
    });

    it('returns I need a walk if fitness is under 3', () => {
        pet.fitness = 2
        expect(pet.checkUp()).toEqual('I need a walk')

    })

    it('returns I am hungry if hunger is above 5', () => {
        pet.hunger = 6
        expect(pet.checkUp()).toEqual('I am hungry')
    })

    it('returns I am hungry AND I need a walk if hunger above 5 & fitness under 3', () => { 
        pet.hunger = 6
        pet.fitness = 2
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk')
    });

    it('returns I feel great if neither conditions are met', () => {
        expect(pet.checkUp()).toEqual('I feel great')
    })
});

describe('isAlive getter method', () => { 
    let pet
    beforeEach(() => {
        pet = new Pet('Daphne');
    });

    it('has a isAlive getter method', () => {
        expect(pet.isAlive).toEqual(true)
    });

    it('isAlive returns false when age is over 30', () => {
        pet.age = 30
        expect(pet.isAlive).toEqual(false)
    });

    it('isAlive returns false when hunger is over 10', () => {
        pet.hunger = 10
        expect(pet.isAlive).toEqual(false)
    });

    it('isAlive returns false when fitness is 0', () => {
        pet.fitness = 0
        expect(pet.isAlive).toEqual(false)
    });


});
      