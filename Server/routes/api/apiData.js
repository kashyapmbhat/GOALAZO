const express = require('express');
const axios = require('axios')
const cron = require('node-cron');
const  router = express.Router()
const apiModel = require('../../models/apiModel');


// async method for getting the api data
const apiCall = async (endpoint) =>{
  var config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/${endpoint}`,
    headers: {
      'x-rapidapi-key': `${process.env.API_KEY}`,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };
  try{
    const res = await axios(config)
    return res.data
  }catch(err){
    console.log(err)
  }
}

// get data from api
cron.schedule('00 04 * * *',async () => {
  console.log('API update called')
  let plstandings = []
  let sastandings = []
  let llstandings = []

  let plFixtures = []
  let saFixtures = []
  let llFixtures = []

  let plTopScorers = []
  let saTopScorers = []
  let llTopScorers = []

  plstandings = await apiCall('standings?league=39&season=2020')
  llstandings = await apiCall('standings?league=140&season=2020')
  sastandings = await apiCall('standings?league=135&season=2020')

  plFixtures = await apiCall('fixtures?league=39&season=2020&last=10&timezone=Asia/Kolkata')
  llFixtures = await apiCall('fixtures?league=140&season=2020&last=10&timezone=Asia/Kolkata')
  saFixtures = await apiCall('fixtures?league=135&season=2020&last=10&timezone=Asia/Kolkata')

  plTopScorers = await apiCall('players/topscorers?league=39&season=2020')
  llTopScorers = await apiCall('players/topscorers?league=140&season=2020')
  saTopScorers = await apiCall('players/topscorers?league=135&season=2020')

  const newData = new apiModel({
    plFixtures: plFixtures,
    saFixtures: saFixtures,
    llFixtures: llFixtures,
    plstandings: plstandings,
    sastandings: sastandings,
    llstandings: llstandings,
    plTopScorers: plTopScorers,
    saTopScorers: saTopScorers,
    llTopScorers: llTopScorers
  })

  try{
    await apiModel.findOneAndReplace({},newData)
  }catch(err){
    console.log(err);
  }
})


// return all news articles
router.get('/',async (req,res) => {

  try{
    const data = await apiModel.find()
    res.json(data);
  }catch(err){
    console.log(err);
  }
})

module.exports = router;