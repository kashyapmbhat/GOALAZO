import Newscard from "../Newscard/Newscard"
import './Newscomp.css'

const Newscomp = ({news,likeUpdate}) => {
    console.log(`rendering ${window.location.pathname}`)
    if(news.length <=0){
        return (<></>)
    }
    return (
        <>
        <div className="news-head">{(window.location.pathname === '/')?'News articles':'Bookmarked'}</div>
        <div className="news-container">
            {news.map((ele)=>(
                <div className="box"><Newscard key={ele._id} ele={ele} likeUpdate={likeUpdate}/></div>
            ))}
        </div>
        </>
    )
}
export default Newscomp
