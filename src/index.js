
import database from "./../database.json";
import PersonRepository from './PersonRepository.js'
import Person from "./Person.js";
import TerminalController from "./TerminalController.js";


const DEFAULT_LANG = 'pt-BR';
const STOP_TERM = ':q';

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, DEFAULT_LANG);

async function mainLoop(){
  try {
    const answer = await terminalController.question('What??');
    console.log('answer: ', answer);
    if(answer === STOP_TERM){
      terminalController.closeTerminal();
      console.log('process finished!');
      return;
    }
    //Refactoring this
    const pathToDatabaseFile = './../database.json';
    console.log('pathToDatabaseFile: ', pathToDatabaseFile);
    const db = JSON.parse(await PersonRepository.init(pathToDatabaseFile));
    const personRepository = new PersonRepository(db, pathToDatabaseFile);
    const person = Person.generateInstanceFromString(answer);
    terminalController.updateTable(person.formatted(DEFAULT_LANG));
    //it should be inside controller but in a repository/service
    await personRepository.save(person);
    // await save(person);
    return mainLoop();
  } catch (error) {
    console.log('ERROR: ', error);
    return mainLoop();
  }
}

await mainLoop();
