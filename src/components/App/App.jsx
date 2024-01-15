import GalleryList from "../GalleryList/GalleryList";
import Form from "../Form/Form";
import axios from "axios";
import { useState } from "react";
import { Typography } from "@mui/material";
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



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
        {/* <h1>React Gallery</h1> */}
        <Typography variant="h3" component="h2">
          React Gallery
        </Typography>
        <Form getGallery={getGallery} />
      </header>
      <GalleryList getGallery={getGallery} galleryList={galleryList} />
    </div>
  );
}

export default App;
