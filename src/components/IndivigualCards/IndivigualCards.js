import PlayerCard from '../PlayerCard/PlayerCard'
import TeamCard from '../TeamCard/TeamCard'
import './IndivigualCards.css'
const IndivigualCards = ({player,team, country}) => {
    console.log(player)
    return (
        <div className="ls-container">
            <PlayerCard player={player}/>
            <TeamCard team={team} country={country}/>
        </div>
    )
}

export default IndivigualCards
