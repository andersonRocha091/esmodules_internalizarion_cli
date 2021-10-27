import { writeFile, readFile} from "fs/promises";
import BaseRepository from "./BaseRepository.js";

class PersonRepository extends BaseRepository{
  constructor(db, pathname){
    super(db);
    this.path = pathname;
  }
  
  static init(dabasePath){
    return readFile(dabasePath);
  }

  async save(data){
    this.db.push(data);
    await writeFile(this.path, JSON.stringify(currentData));
  }
}

export default PersonRepository;