import { useState } from "react";

const GalleryItem = ({ galItem }) => {
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

    if (inDesc === false) {
        return (
            <div key={galItem.id} data-testid="galleryItem">
                <h3>{galItem.title}</h3>
                <img onClick={() => toggleDesc()} src={galItem.url} alt={galItem.description} data-testid="toggle"/>
            </div>
        )
    }
    return (
        <div key={galItem.id} data-testid="galleryItem">
            <h3>{galItem.title}</h3>
            {/* <img className="grey" onClick={() => toggleDesc(galItem.id)} src={galItem.url} alt={galItem.description} /> */}
            <div className="imageHolder">
                {/* <img className="blurred" src={galItem.url} alt={galItem.description} /> */}
                <div className="descBox" onClick={() => toggleDesc(galItem.id)} data-testid="toggle"><p className="descriptionText" onClick={() => toggleDesc(galItem.id)} data-testid="description">{galItem.description}</p></div>
                
            </div>
        </div>
    )
}

export default GalleryItem