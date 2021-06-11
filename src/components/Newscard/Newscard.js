import './Newscard.css';
const Newscard = ({ele,likeUpdate}) => {
    const Like = () => {
        console.log('like called')
        fetch(`${process.env.REACT_APP_SERVER_URL}api/users/${sessionStorage.getItem('userID')}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({postID: ele._id})
        })
        
    }

    const Unlike = async () => {
        console.log('unlike called')
        await fetch(`${process.env.REACT_APP_SERVER_URL}api/users/${sessionStorage.getItem('userID')}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({postID: ele._id})
        })

    }

    const upd = async () => {
        await Unlike()
    }

    const dcAction = () => {
        if(sessionStorage.getItem('userStatus') === 'success'){
            console.log(window.location.pathname,'DOUBLE CLICK')
            if(window.location.pathname === '/'){
                console.log(ele._id)
                Like()
            }else if(window.location.pathname === '/favourites'){
                console.log(window.location.pathname,ele._id)
                upd()
                likeUpdate(ele._id)
            }
        }
    }
    return (
        <div className='card' onDoubleClick={dcAction}>
            <div className='img-container'><img src={ele.img} alt="Avatar" ></img></div>
            <div className="container-text">
                <a href={ele.link} target="_blank" rel="noreferrer"><p>{ele.title}</p></a>
                
            </div>
        </div>
    )
}

export default Newscard
