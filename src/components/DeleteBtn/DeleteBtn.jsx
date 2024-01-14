import './DeleteBtn.css'
import axios from 'axios';

const DeleteBtn = ({itemId, getGallery}) => {
    const handleDelete = (id) => {
        console.log('in handleDelete', id);

        axios.delete(`/api/gallery/delete/${id}`)
        .then((response) => {
            console.log('successful Delete');
            getGallery()
        }).catch((err) => {
            console.log(err);
            alert('Problem Deleting')
        })

    }
    
    return (
        <button className="dltBtn" onClick={() => handleDelete(itemId)}>Delete</button>
    )
}

export default DeleteBtn