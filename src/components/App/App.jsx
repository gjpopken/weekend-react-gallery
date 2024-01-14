import GalleryList from "../GalleryList/GalleryList";
import Form from "../Form/Form";
import axios from "axios";
import { useState } from "react";
import './App.css'


function App() {
  const [galleryList, setGalleryList] = useState([])
  const getGallery = () => {
    axios.get('/api/gallery')
      .then((response) => {
        console.log(response.data);
        setGalleryList(response.data)
      })
  }

  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
        <Form getGallery={getGallery} />
      </header>
      <GalleryList getGallery={getGallery} galleryList={galleryList} />
    </div>
  );
}

export default App;
