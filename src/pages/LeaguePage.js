import './LeaguePage.css'
import Fixture from "../components/Fixture/Fixture"
import IndivigualCards from "../components/IndivigualCards/IndivigualCards"
import Table from "../components/Table/Table"
import TopScorer from '../components/TopScorer/TopScorer'
const LeaguePage = ({standingData,fixturesData,topScorersData}) => {
    return (
        <>
            {(standingData.length > 0 )? <Table TableSize='long' standingData={standingData}/> : <></>}
            <div className='body-container'>
                <div className='fixture-field'>{(fixturesData.length > 0 )?<Fixture pageName='league' fixturesData={fixturesData}/>: <></>}</div>
                <div className='ls-field'>{(topScorersData.length > 0 && standingData.length > 0)?<IndivigualCards player={topScorersData[0]} team={standingData[0].league.standings[0][0]} country={standingData[0].league.country}/>: <></>}</div>
                <div className="topscorer-field">{(topScorersData.length > 0)?<TopScorer topScorersData={topScorersData}/>:<></>}</div>
            </div>
        </>
    )
}

export default LeaguePage
