import axios from "axios"
import { useState, useEffect } from "react"
import GalleryItem from "../GalleryItem.jsx/GalleryItem"
import './GalleryList.css'


const GalleryList = () => {
    const [galleryList, setGalleryList] = useState([])
    
    useEffect(() => {
        // function to get from DB
        getGallery()
    }, [])

    const getGallery = () => {
        axios.get('/api/gallery')
        .then((response) => {
            console.log(response.data);
            setGalleryList(response.data)
        })
    }
    
    
    return (
       <div className="galleryContainer" data-testid="galleryList">
        {galleryList.map((galItem) => {
            return (
                // <div key={galItem.id}>
                //     <h3>{galItem.title}</h3>
                //     <img src={galItem.url} alt={galItem.description} />
                // </div>
                <GalleryItem 
                key={galItem.id} galItem={galItem}
                getGallery={getGallery} />
            )
        })}
       </div>
    )
}

export default GalleryList