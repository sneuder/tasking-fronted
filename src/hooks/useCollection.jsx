import { useRef, useContext } from "react";
import CollectionsContext from "../data/context/collections/collectionsContext";
import CollectionModel from "../data/models/collectionModel";

const useCollection = () => {
  const inputCollection = useRef(null);
  const { handleSetCollection, collection } = useContext(CollectionsContext);

  console.log(collection);

  const handleSubmit = (e) => {
    e.preventDefault();
    const collectionName = inputCollection.current.value.trim();
    if (collectionName === "") return;

    // const collection = new CollectionModel(collectionName);
    handleSetCollection(collection + 1);
  };

  return {
    handleSubmit,
    inputCollection,
  };
};

export default useCollection;
