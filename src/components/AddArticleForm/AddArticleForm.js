import { useState } from 'react'
import './AddArticleForm.css'
const AddArticleForm = ({updateNews}) => {
    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
    const [link,setLink] = useState('')

    const dbUpdate = async (postData,endpoint) => {
		await fetch(`http://localhost:5001/${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postData)
		})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const postData = {
            title: title,
            img: image,
            link: link
        }
        dbUpdate(postData,'api/news')
        updateNews(postData)

        e.target.reset()
    }


    return (
        <div className="AddArticle-container">
            <h1>Add an article</h1>
            <div className="aa-form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder="  Title" onChange={(e) => setTitle(e.target.value)} required/>
                    <input type="text" placeholder="  Image" onChange={(e) => setImage(e.target.value)} required/>
                    <input type="text" placeholder="  Link" onChange={(e) => setLink(e.target.value)} required/>
                    <button>POST</button>
                </form>
            </div>
        </div>
    )
}

export default AddArticleForm
