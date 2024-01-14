import { useState } from 'react'
import axios from 'axios'
import './Form.css'

const Form = () => {
    const [inForm, setInForm] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const [newImgURL, setNewImgURL] = useState('')

    const toggleInForm = () => {
        console.log('in toggleInForm');
        if (inForm === false) {
            setInForm(true)
        } else {
            setInForm(false)
        }
    }

    const handleSavePost = () => {
        console.log('in handleSavePost');
        // Axios.post()
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
            <form onSubmit={() => {
                toggleInForm()
                handleSavePost()
            }}>
                <label htmlFor="titleInput">Enter Title</label>
                <input required type="text" id="titleInput" placeholder='Enter Title' onChange={(e) => setNewTitle(e.target.value)}/>
                <label htmlFor="descInput">Enter Description</label>
                <input required type="text" id="descInput" placeholder='Enter Description' onChange={(e) => setNewDesc(e.target.value)}/>
                <label htmlFor="urlInput">Enter Image URL</label>
                <input required type="text" id="urlInput" placeholder='Enter Image URL' onChange={(e) => setNewImgURL(e.target.value)}/>
                <button className="inline" type='submit'>Save</button>
                <button className="inline" onClick={toggleInForm} type='reset'>Cancel</button>
            </form>

        </div>
    )

}

export default Form