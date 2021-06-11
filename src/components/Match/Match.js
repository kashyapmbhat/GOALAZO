import './Match.css';
const Match = ({date, time,t1,s1,t2,s2,i1,i2}) => {
    return (
        <>
    <div className="match-container">
        <div className="match-timestamp">
            <p className="date">{date}</p>
            <p className="time">{time}</p>
        </div>
        <div className="match-result">
            <p className="team-name team-name-left">{t1}</p>
            <p className="team-logo-container"><img className="team-logo" src={i1} alt=''/></p>
            <p className="result">{s1}-{s2}</p>
            <p className="team-logo-container"><img className="team-logo" src={i2} alt=''/></p>
            <p className="team-name team-name-right">{t2}</p>
        </div>
    </div>
        </>
    )
}

export default Match
