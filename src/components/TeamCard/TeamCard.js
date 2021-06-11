import './TeamCard.css'

const TeamCard = ({team,country}) => {
    return (
        <div class="tc-container">
        <div class="row1">
            <div class="wins">
                <h1>Wins: {team.all.win}</h1>
                <p>Home: {team.home.win}</p>
                <p>Away: {team.away.win}</p>
            </div>
            <div class="draws">
                <h1>Draws: {team.all.draw}</h1>
                <p>Home: {team.home.draw}</p>
                <p>Away: {team.away.draw}</p>
            </div>
            <div class="loses">
                <h1>Loses: {team.all.lose}</h1>
                <p>Home: {team.home.lose}</p>
                <p>Away: {team.away.lose}</p>
            </div>
        </div>
        <div class="row2">
            <div class="country">
                <h2>Country</h2>
                <p>{country}</p>
            </div>
            <div class="image">
                <img src={team.team.logo} 
                alt="" ></img>
                <p>{team.team.name}</p>
            </div>
            <div class="form">
                <h2>Form</h2>
                <label for="w">W </label>
                <progress id="w" value={team.all.win} max={team.all.played}> </progress>
                <label for="l">L </label>
                <progress id="l" value={team.all.lose} max={team.all.played}> </progress>
                <label for="d">D </label>
                <progress id="d" value={team.all.draw} max={team.all.played}> </progress>
                
            </div>
        </div>
        <div class="row3">
            <div class="goals">
                <h1>Goals</h1>
                <p>For: {team.all.goals.for}</p>
                <p>Against: {team.all.goals.against}</p>
            </div>
            <div class="played">
                <h1>Played: {team.all.played}</h1>
                <p>Home: {team.home.played}</p>
                <p>Away: {team.away.played}</p>
            </div>
            <div class="penalty">
                <p>Points: {team.points}</p>
                <p>GD: {team.goalsDiff}</p>
            </div>
        </div>
    </div>
    )
}

export default TeamCard
