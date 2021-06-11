import Match from "../Match/Match"
import './Fixture.css';
const Fixture = ({pageName,fixturesData}) => {


    
    return (
        <div className="fixture-container">
            <div className={(pageName === 'fixtures') ? 'fixture-header fixtures-page' : 'fixture-header league-page'}>
            
                <div className='head-text'>{(pageName === 'fixtures') ?  <><img className='fixtures-logo' src={fixturesData[0].league.logo} alt=''/>{fixturesData[0].league.name}</>: 'Results'}</div>
            </div>
            <div>
            {fixturesData.map((ele) => (
                <Match key={ele.fixture.id} date={ele.fixture.date.slice(0,10)} time={ele.fixture.date.slice(11,16)} t1={ele.teams.home.name} t2={ele.teams.away.name} s1={ele.goals.home} s2={ele.goals.away} i1={ele.teams.home.logo} i2={ele.teams.away.logo}/>
            ))}
            </div>
        </div>
    )
}

export default Fixture