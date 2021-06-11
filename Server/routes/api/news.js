const express = require('express');
const router = express.Router();
const newsModel = require('../../models/NewsModel');
const usersModel = require('../../models/usersModel');

router.get('/', async (req, res) => {
    try{
        const news = await newsModel.find()
        res.json(news)
    }catch(err){
        console.log(err);
    }
    
})



router.get('/:id', async (req, res) => {
    try{
        const list = await usersModel.findOne({email: req.params.id},'likes')
        const news = await newsModel.find({_id: {$in: list.likes}})
        res.json(news)
    }catch(err){
        console.log(err);
    }
    
})


router.post('/',async (req,res) =>{
    const newNews = new newsModel({
        title: req.body.title,
        img: req.body.img,
        link: req.body.link
    });
    try{
        await newNews.save();
    }catch(err){
        console.log(err)
    }
})


module.exports = router;