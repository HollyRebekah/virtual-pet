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

    it('throws an error if the pet is not alive', () => {
        pet.age = 30
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive')
        });
});

describe('walk function', () =>{
    let pet
    beforeEach(() => {
        pet = new Pet('Daphne');
    });

    it('walk increases fitness by 4', () => { 
        pet.fitness = 4
        pet.walk()
        expect(pet.fitness).toEqual(8);
    });

    it('walk cannot increase fitness higher than 10', () => {
        pet.fitness = 10
        pet.walk()
        expect(pet.fitness).toEqual(10);
    }); 

    it('throws an error if the pet is not alive', () => {
        pet.fitness = 0
        expect(() => pet.walk()).toThrow('Your pet is no longer alive')
        });
});

describe('feed function', () => { 
    let pet
    beforeEach(() => {
        pet = new Pet('Daphne');
    });

    it('feed method decreases hunger by 3', () =>{ 
        pet.hunger = 5
        pet.feed()
        expect(pet.hunger).toEqual(2)
    });

    it('feed method cannot decrease hunger beyond 0', () => {
        pet.feed()
        expect(pet.hunger).toEqual(0)
    })

    it('throws an error if the pet is not alive', () => {
        pet.age = 30
        expect(() => pet.feed()).toThrow('Your pet is no longer alive')
        });
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

describe('adopt a child method', () => { 
    let parent
    let child
    beforeEach(() => {
        parent = new Pet('Daphne');
        child = new Pet('Denzel');
    });

    it('returns 2 instances', () =>{
        expect(new Pet('Daphne')).toBeInstanceOf(Object)
        expect(new Pet('Denzel')).toBeInstanceOf(Object)
    });

    it('takes the child as an argument and passes child into array in children propery', () =>{
        parent.adoptAChild(child)
        expect(parent.children).toContain(child);
    });
});

describe('have a baby method', () => { 
    let parent
    beforeEach(() => {
        parent = new Pet('Daphne');
    });

    it('children property has an array', () => {
        expect(parent.children).toEqual([]);
    });

    it('passes a new instance of Pet into children array when called', () => {
        parent.haveABaby('Denzel')
        expect(parent.children).toBeInstanceOf(Object)
        expect(parent.children[0].name).toEqual('Denzel')
    });
});  