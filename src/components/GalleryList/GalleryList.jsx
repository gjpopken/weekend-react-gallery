import axios from "axios"
import { useState, useEffect } from "react"
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
       <div className="galleryContainer">
        {galleryList.map((galItem) => {
            return (
                <div key={galItem.id}>
                    <h3>{galItem.title}</h3>
                    <img src={galItem.url} alt={galItem.description} />
                </div>
            )
        })}
       </div>
    )
}

export default GalleryList