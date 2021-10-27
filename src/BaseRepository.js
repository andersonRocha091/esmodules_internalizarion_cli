
class BaseRepository{
  constructor(db){
    this.db = db;
  }

  save(data){
    throw new Error('Method Not Implemented'); 
  }

  // find(){
  //   throw new Error('Method not implemented');
  // }
}

export default BaseRepository;