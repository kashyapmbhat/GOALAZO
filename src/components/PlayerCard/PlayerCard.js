import './PlayerCard.css'
const PlayerCard = ({player}) => {
    return (
    <div className="pc-container">
        <div className="profile">
            <div className="pDetails1">
                <p id="name">{player.player.name}</p>
                <p className="country">Country: {player.player.nationality}</p>
                <p className="club">Club: {player.statistics[0].team.name}</p>
                <p id="age">Age: {player.player.age}</p>
            </div>
            <div className="pDetails2">
                <img className="img" src={player.player.photo} alt=""></img> 
            </div>
        </div>
        <div className="stats">
            <div className="sLeft">
                <p> Appearences: {player.statistics[0].games.appearences}</p>
                <p>Goals: {player.statistics[0].goals.total}</p>
                <p>Assists: {player.statistics[0].goals.assists}</p>
                <p>Shots: {player.statistics[0].shots.total}</p>
                <p>Passes: {player.statistics[0].passes.total}</p>
                <p>Tackles: {player.statistics[0].tackles.total}</p>
                
            </div>
            <div className="sRight">
                <p>Yellow Cards: {player.statistics[0].cards.yellow}</p>
                <p>Red Cards: {player.statistics[0].cards.red}</p>
                <p >Fouls: {player.statistics[0].fouls.committed}</p>
                <p>Interceptions: {player.statistics[0].tackles.interceptions}</p>
                <p>Duels: {player.statistics[0].duels.total}</p>
                <p>Rating: {parseFloat(player.statistics[0].games.rating).toFixed(1)}</p>

            </div>
        </div>
    </div>
    )
}

export default PlayerCard
