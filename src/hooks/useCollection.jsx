import { useRef, useContext } from "react";
import CollectionsContext from "../data/context/collections/collectionsContext";
import CollectionModel from "../data/models/collectionModel";

const useCollection = () => {
  const inputCollection = useRef(null);
  const { collections, handleSetCollection } = useContext(CollectionsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const collectionName = inputCollection.current.value.trim();
    if (collectionName === "") return;

    const newCollection = new CollectionModel(collectionName);
    handleSetCollection(newCollection);
  };

  return {
    collections,
    handleSubmit,
    inputCollection,
  };
};

export default useCollection;
