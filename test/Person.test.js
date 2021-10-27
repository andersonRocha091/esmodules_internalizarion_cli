import mocha from "mocha";
const { describe, it} = mocha
import chai from 'chai';
const { expect } = chai;
import Person from "../src/Person.js";

describe('Person', () => {
  it("Should return a person instance from a string", () => {
    const person = Person.generateInstanceFromString('1 Bike,Carro 20000 2021-01-01 2021-10-01');
    const expected = {
      id: '1',
      vehicles: ['Bike','Carro'],
      kmTraveled:  '20000',
      from: '2021-01-01',
      to: '2021-10-01',
    }
    expect(person).to.be.deep.equal(expected); 
  });
  it('Should format values', () => {
    const person = new Person({
      id: '1',
      vehicles: ['Bike','Carro'],
      kmTraveled:  '20000',
      from: '2021-01-01',
      to: '2021-10-01',
    });
    const result = person.formatted("pt-BR");
    const expected = {
        id: 1,
        vehicles: 'Bike and Carro',
        kmTraveled: '20,000 km',
        from: 'January 01, 2021',
        to: 'October 01, 2021'
      }
    expect(result).to.be.deep.equal(result);
  });
})