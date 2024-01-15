import { useState } from 'react'
import { TextField } from '@mui/material'
import axios from 'axios'
import './Form.css'

const Form = ({ getGallery }) => {
    const [inForm, setInForm] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const [newImgURL, setNewImgURL] = useState('')

    const toggleInForm = () => {
        if (inForm === false) {
            setInForm(true)
        } else {
            setInForm(false)
        }
    }

    const handleSavePost = (e) => {
        e.preventDefault()
        // console.log('in handleSavePost');
        axios.post('/api/gallery', {
            title: newTitle,
            description: newDesc,
            url: newImgURL
        }).then((response) => {
            // console.log('successfully POSTed');
            getGallery()
        }).catch((err) => {
            alert('Error with POST')
            console.log(err);
        })
    }

    if (inForm === false) {
        return (
            <div className="inline">
                <button className="inline" onClick={toggleInForm}>Add A Photo</button>
            </div>
        )
    }
    return ( // return for creating the form
        <div className="inline">
            <form onSubmit={(e) => {
                handleSavePost(e)
                toggleInForm()
            }}>
                <label htmlFor="titleInput">Enter Title</label>
                <TextField required id='titleInput' label="Enter Title" placeholder='Enter Title' variant='standard' onChange={(e) => setNewTitle(e.target.value)}/>
                <label htmlFor="descInput">Enter Description</label>
                <TextField required id='descInput' label="Enter Description" placeholder='Enter Description' variant='standard' onChange={(e) => setNewDesc(e.target.value)}/>
                <label htmlFor="urlInput">Enter Image URL</label>
                <TextField required id='urlInput' label="Enter Image URL" placeholder='Enter Image URL' variant='standard' onChange={(e) => setNewImgURL(e.target.value)}/>
                {/* <input required type="text" id="urlInput" placeholder='Enter Image URL' onChange={(e) => setNewImgURL(e.target.value)} /> */}
                <button className="inline" type='submit'>Save</button>
                <button className="inline" onClick={toggleInForm} type='reset'>Cancel</button>
            </form>

        </div>
    )

}

export default Form