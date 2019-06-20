const Pet = require('../src/pet');

describe('constructor', () =>{
    let pet
    beforeEach(() => {
        pet = new Pet('Fido');
      });

    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        expect(pet.name).toEqual('Fido');
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
        pet = new Pet('Fido');
    });

    it('growUp increases age by 1', () => {
        pet.growUp();

        expect(pet.age).toEqual(1)
    });

    it('growUp increases hunger by 5', () =>{
        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it('growUp decreases fitness by 3', () =>{
        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });

});
      