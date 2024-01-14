import { useEffect } from "react"
import GalleryItem from "../GalleryItem.jsx/GalleryItem"
import './GalleryList.css'


const GalleryList = ({ getGallery, galleryList }) => {
    useEffect(() => {
        // function to get from DB
        getGallery()
    }, [])

    return (
        <div className="galleryContainer" data-testid="galleryList">
            {galleryList.map((galItem) => {
                return (
                    <GalleryItem
                        key={galItem.id} galItem={galItem}
                        getGallery={getGallery} />
                )
            })}
        </div>
    )
}

export default GalleryList