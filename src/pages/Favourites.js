import { useEffect, useState } from "react"
import Newscomp from "../components/Newscomp/Newscomp"
import IndivigualCards from "../components/IndivigualCards/IndivigualCards"
import './Favourites.css'
import AddArticleForm from "../components/AddArticleForm/AddArticleForm"

const Favourites = ({updateNews}) => {

    const [likedNews, setLikedNews] = useState([])
    const [fp, setFP] = useState({
      "player": {
          "id": 184,
          "name": `${sessionStorage.getItem('userFP')}`,
          "firstname": "Harry",
          "lastname": "Kane",
          "age": 28,
          "birth": {
              "date": "1993-07-28",
              "place": "London",
              "country": "England"
          },
          "nationality": "England",
          "height": "188 cm",
          "weight": "86 kg",
          "injured": false,
          "photo": "https://media.api-sports.io/football/players/184.png"
      },
      "statistics": [{
          "team": {
              "id": 47,
              "name": "Tottenham",
              "logo": "https://media.api-sports.io/football/teams/47.png"
          },
          "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020
          },
          "games": {
              "appearences": 35,
              "lineups": 35,
              "minutes": 3087,
              "number": null,
              "position": "Attacker",
              "rating": "7.642857",
              "captain": false
          },
          "substitutes": {
              "in": 0,
              "out": 5,
              "bench": 0
          },
          "shots": {
              "total": 110,
              "on": 53
          },
          "goals": {
              "total": 23,
              "conceded": 0,
              "assists": 14,
              "saves": null
          },
          "passes": {
              "total": 909,
              "key": 51,
              "accuracy": 18
          },
          "tackles": {
              "total": 22,
              "blocks": 11,
              "interceptions": 11
          },
          "duels": {
              "total": 466,
              "won": 209
          },
          "dribbles": {
              "attempts": 100,
              "success": 52,
              "past": null
          },
          "fouls": {
              "drawn": 60,
              "committed": 26
          },
          "cards": {
              "yellow": 1,
              "yellowred": 0,
              "red": 0
          },
          "penalty": {
              "won": null,
              "commited": null,
              "scored": 4,
              "missed": 0,
              "saved": null
          }
      }]
  })
    const [ft, setFT] = useState({
      "rank": 1,
      "team": {
          "id": 50,
          "name": `${sessionStorage.getItem('userFT')}`,
          "logo": "https://media.api-sports.io/football/teams/50.png"
      },
      "points": 86,
      "goalsDiff": 51,
      "group": "Premier League",
      "form": "WLWLW",
      "status": "same",
      "description": "Promotion - Champions League (Group Stage)",
      "all": {
          "played": 38,
          "win": 27,
          "draw": 5,
          "lose": 6,
          "goals": {
              "for": 83,
              "against": 32
          }
      },
      "home": {
          "played": 19,
          "win": 13,
          "draw": 2,
          "lose": 4,
          "goals": {
              "for": 43,
              "against": 17
          }
      },
      "away": {
          "played": 19,
          "win": 14,
          "draw": 3,
          "lose": 2,
          "goals": {
              "for": 40,
              "against": 15
          }
      },
      "update": "2021-05-23T00:00:00+00:00"
  })

    const fetchBEnd = async (endpoint) => {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}${endpoint}`)
        const data = await res.json()
        return data;
      }

      useEffect(() => {
        const getLikedNews = async (endpoint) => {
          const s = await fetchBEnd(endpoint)
          setLikedNews(s)
        }
        
        getLikedNews(`api/news/${sessionStorage.getItem('userID')}`)
      },[])

    const likeUpdate = (removeID) => {
        setLikedNews(likedNews.filter(news => news._id !== removeID))
    }
    return (
        <div className="fav-container">
            <div className="left-fav-container">
              <div><AddArticleForm updateNews={updateNews}/></div>
              <Newscomp news={likedNews} likeUpdate={likeUpdate}/>
            </div>
            <div className='card-field'><IndivigualCards player={fp} team={ft} country={'England'}/></div>
        </div>
    )
}
export default Favourites
