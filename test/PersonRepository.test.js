import mocha from "mocha";
const { describe, it} = mocha
import chai from 'chai';
const { expect } = chai;
import PersonRepository from "../src/PersonRepository.js";

describe('Person repository test suite', () => {
  it('Should read file from database', async () => {
    const test = {url: import.meta.url};
    const { pathname: databaseFile } = new URL('./../database.json', test.url);
    console.log('databaseFile: ', databaseFile);
    const result = await PersonRepository.init(databaseFile.toString());
    console.log('RESULT: ', result);
    expect(true).to.be.ok;
  })
})
