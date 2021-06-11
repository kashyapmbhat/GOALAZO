import Heroimg from "../components/Heroimg/Heroimg"
import Newscomp from "../components/Newscomp/Newscomp"
import Table from "../components/Table/Table"
import './Home.css'

const Home = ({llStandings,plStandings,saStandings,news}) => {
    return (
        <>
            <Heroimg/>
            <div className="home-container">
                <div className="news"><Newscomp news={news}/></div>

                <div className="side-bar">
                    {(llStandings.length > 0 )? <Table TableSize='short' standingData={llStandings}/> : <></>}
                    {(plStandings.length > 0 )? <Table TableSize='short' standingData={plStandings}/> : <></>}
                    {(saStandings.length > 0 )? <Table TableSize='short' standingData={saStandings}/> : <></>}
                </div> 
            </div>
        </>
    )
}

export default Home
