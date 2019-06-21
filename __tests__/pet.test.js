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

    it(' feed method cannot decrease hunger beyond 0', () => {
        pet.feed()

        expect(pet.hunger).toEqual(0)
    })
});   
      