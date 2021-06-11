import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Fixtures from "./pages/Fixtures";
import LeaguePage from "./pages/LeaguePage";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";

function App() {
    const [userStatus,setUserStatus] = useState('') 

  const [saStandings , setSAStandings] = useState([])
  const [llStandings , setLLStandings] = useState([])
  const [plStandings , setPLStandings] = useState([])

  const [saFixtures , setSAFixtures] = useState([])
  const [llFixtures , setLLFixtures] = useState([])
  const [plFixtures , setPLFixtures] = useState([])

  const [saTopScorers, setSATopScorers] = useState([])
  const [llTopScorers, setLLTopScorers] = useState([])
  const [plTopScorers, setPLTopScorers] = useState([])
  console.log(process.env)
  const [news , setNews] = useState([])

  const fetchBEnd = async (endpoint) => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}${endpoint}`)
    const data = await (await res).json()
    return data;
  }

  const getNews = async (endpoint) => {
    const s = await fetchBEnd(endpoint)
    setNews(s)
  }

  useEffect(() => {
    setUserStatus(sessionStorage.getItem('userStatus'))

    const getNews = async (endpoint) => {
      const s = await fetchBEnd(endpoint)
      setNews(s)
    }

    const getAPIData = async (endpoint) => {
        const s = await fetchBEnd(endpoint)
        setLLStandings(s[0].llStandings)
        setPLStandings(s[0].plStandings)
        setSAStandings(s[0].saStandings)

        setLLFixtures(s[0].llFixtures)
        setPLFixtures(s[0].plFixtures)
        setSAFixtures(s[0].saFixtures)

        setLLTopScorers(s[0].llTopScorers)
        setPLTopScorers(s[0].plTopScorers)
        setSATopScorers(s[0].saTopScorers)
      }

    getNews('api/news')
    getAPIData('api/apiData')
    
  }, [] );

  const getUserStatus = () => {
      setUserStatus(sessionStorage.getItem('userStatus'))
  }

  const updateNews = (postData) => {
      // setNews([...news,postData])
      getNews('api/news')
  }

  

  return (
    <>
      <Router>
        <Navbar userStatus={userStatus}/>
        <Switch>
          <Route exact path="/">
            <Home llStandings={llStandings} plStandings={plStandings} saStandings={saStandings} news={news} />
          </Route>
          <Route exact path="/fixtures">
            <Fixtures llFixtures={llFixtures} plFixtures={plFixtures} saFixtures={saFixtures}/>
          </Route>
          <Route exact path="/laliga">
            <LeaguePage standingData={llStandings} fixturesData={llFixtures} topScorersData={llTopScorers}/>
          </Route>
          <Route exact path="/epl">
            <LeaguePage standingData={plStandings} fixturesData={plFixtures} topScorersData={plTopScorers}/>
          </Route>
          <Route exact path="/seriea">
            <LeaguePage standingData={saStandings} fixturesData={saFixtures} topScorersData={saTopScorers}/>
          </Route>
          <Route exact path={(sessionStorage.getItem('userStatus') === 'success')? "/favourites":"/login"}>
          {(sessionStorage.getItem('userStatus') === 'success')? <Favourites updateNews={updateNews}/>:<Login updateUserStatus={getUserStatus}/>}
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
