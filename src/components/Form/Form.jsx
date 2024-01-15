import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { CloudUpload } from '@mui/icons-material'
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
        // const fileInput = document.getElementById('urlInput')
        const formData = new FormData()
        formData.append('title', newTitle)
        formData.append('description', newDesc)
        formData.append('theUpload', newImgURL)

        console.log(JSON.stringify(formData));

        axios.post('/api/gallery', formData)
        .then((response) => {
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
                <TextField required id='titleInput' label="Enter Title" placeholder='Enter Title' variant='standard' onChange={(e) => setNewTitle(e.target.value)} />
                <label htmlFor="descInput">Enter Description</label>
                <TextField required id='descInput' label="Enter Description" placeholder='Enter Description' variant='standard' onChange={(e) => setNewDesc(e.target.value)} />
                <label htmlFor="urlInput">Enter Image URL</label>
                <TextField required id='urlInput' label=" " placeholder='Enter Image URL' variant='standard' type='file' onChange={(e) => setNewImgURL(e.target.files[0])}/>
                {/* <Button component="label" variant="contained" startIcon={<CloudUpload />}>
                    Upload file
                    <VisuallyHiddenInput type="file" />
                </Button> */}
                <button className="inline" type='submit'>Save</button>
                <button className="inline" onClick={toggleInForm} type='reset'>Cancel</button>
            </form>

        </div>
    )

}

export default Form