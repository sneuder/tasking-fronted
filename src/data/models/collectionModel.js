import { v4 as uuidv4 } from "uuid";

class CollectionModel {
  constructor(collectionName) {
    this.id = uuidv4();
    this.name = collectionName;
    this.tasks = [];
  }
}

export default CollectionModel;
