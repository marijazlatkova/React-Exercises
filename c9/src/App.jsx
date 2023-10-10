import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { API_URL } from "./utils/constants";
import axios from "axios";
import { GalleryContext } from "./utils/GalleryContext";

import "./css/App.css";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    axios(`${API_URL}/photos`)
      .then((res) => setPhotos(res.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div id="app">
      <Nav />

      <GalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery listOfPhotos={photos} />} />
        </Routes>
      </GalleryContext.Provider>
    </div>
  );
};
