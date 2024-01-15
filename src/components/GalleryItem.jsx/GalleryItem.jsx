import { useState } from "react";
import { Typography } from "@mui/material";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import axios from "axios";

const GalleryItem = ({ galItem, getGallery }) => {
    const [inDesc, setInDesc] = useState(false)

    const toggleDesc = () => {
        // console.log('in toggleDesc', id);
        if (inDesc === false) {
            setInDesc(true)
        } else {
            setInDesc(false)
        }
        // console.log(inDesc);
    }

    const handleLove = (id) => {
        // console.log('in handle love', id);
        axios.put(`/api/gallery/like/${id}`)
        .then((response) => {
            // console.log('Successfully PUT');
            getGallery()
        }).catch((err) => {
            alert("Something wrong")
            console.log(err);
        })
    }

    if (inDesc === false) {
        return (
            <div key={galItem.id} data-testid="galleryItem">
                {/* <h3>{galItem.title}</h3> */}
                <Typography variant="h6">{galItem.title}</Typography>
                <div className="imageHolder">
                    <img onClick={() => toggleDesc()} src={galItem.url} alt={galItem.description} data-testid="toggle" />
                    <p className="likes">&#9829; {galItem.likes}</p>
                </div>
                <button onClick={() => {
                    handleLove(galItem.id)
                }} data-testid="like">Love! </button>
            </div>
        )
    }
    return (
        <div key={galItem.id} data-testid="galleryItem">
            {/* <h3>{galItem.title}</h3> */}
            <Typography variant="h6">{galItem.title}</Typography>
            <div className="imageHolder">
                <div className="descBox" onClick={() => toggleDesc(galItem.id)} data-testid="toggle"><p className="descriptionText" onClick={() => toggleDesc(galItem.id)} data-testid="description">{galItem.description}</p></div>
                <p className="likes">&#9829; {galItem.likes}</p>
                <DeleteBtn itemId={galItem.id} getGallery={getGallery}/>
            </div>
            <button onClick={() => {
                handleLove(galItem.id)
            }} data-testid="like">Love! </button>
        </div>
    )
}

export default GalleryItem