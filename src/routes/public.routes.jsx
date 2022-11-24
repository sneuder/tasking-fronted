import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Collections from "../pages/collections/collections";
import Collection from "../pages/collections/collection";

/**
  for the moment, this section is gonna have all the pages until the auth proces
  can be implemented. The user will work with the localstorage
**/

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:collection" element={<Collection />} />
    </Routes>
  );
};

export default PublicRoutes;
