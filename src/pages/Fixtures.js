import Fixture from "../components/Fixture/Fixture"
import './Fixtures.css'

const Fixtures = ({llFixtures,plFixtures,saFixtures}) => {
    return (
        <div className="f-container">
            {(llFixtures.length > 0 )?<Fixture pageName='fixtures' fixturesData={llFixtures}/>: <></>}
            {(plFixtures.length > 0 )?<Fixture pageName='fixtures' fixturesData={plFixtures}/>: <></>}
            {(saFixtures.length > 0 )?<Fixture pageName='fixtures' fixturesData={saFixtures}/>: <></>}
            
            
        </div>
    )
}

export default Fixtures
