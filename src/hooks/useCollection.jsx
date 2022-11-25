import { useContext } from "react";
import { useForm } from "react-hook-form";

import CollectionsContext from "../data/context/collections/collectionsContext";
import CollectionModel from "../data/models/collectionModel";

const useCollection = () => {
  const { register, handleSubmit } = useForm();

  const { collections, handleSetCollection } = useContext(CollectionsContext);

  const handleCollection = (data) => {
    const { collectionName } = data;
    if (collectionName === "") return;

    const newCollection = new CollectionModel(collectionName);
    handleSetCollection(newCollection);
  };

  return {
    collections,
    handleCollection,
    handleSubmit,
    register,
  };
};

export default useCollection;
