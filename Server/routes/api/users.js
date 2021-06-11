const express = require('express');
const router = express.Router();
const usersModel = require('../../models/usersModel');
const bcrypt = require('bcrypt');

//sign up
router.post('/', async (req,res) => {
    try{
        const user = await usersModel.findOne({email: req.body.email})
        if (user != null){
            return res.json({msg: '', user: user});
        }
        else{

            let pass = bcrypt.hashSync(req.body.pwd,1);

            const newUser = new usersModel({
                name: req.body.name,
                email: req.body.email,
                pwd: pass,
                fteam: req.body.fteam,
                fplayer: req.body.fplayer
            });
        
            try{
                const returnData = await newUser.save()
                return res.json({msg: 'success', user: returnData});
            }catch(err){
                res.json({msg: err});
                console.log(err);
            }
        }
    }catch(err){
        console.log(err);
    }
    
})


//sign in
router.post('/:id', async (req,res) => {
    let msg = ''
    try{
        const user = await usersModel.findOne({email: req.params.id})
        if(bcrypt.compareSync(req.body.pwd,user.pwd))
        {
            msg = 'success'
        }
        else{
            msg = 'Please enter correct password'
        }
        return res.json({msg: msg,user: user});
    }catch(err){
        return res.json({msg: err});
    }
})


router.get('/', async (req, res) => {
    try{
        const users = await usersModel.find();
        res.json(users);
    }catch(err){
        res.json({msg: err});
    }
})


//like
router.put('/:id', async (req, res) => {
    try {
        await usersModel.updateOne({email: req.params.id,likes: {$nin: req.body.postID}},{$push: {likes: req.body.postID}})
    }catch(err){
        console.log(err);
    }
})

//dislike
router.delete('/:id', async (req, res) => {
    try {
        await usersModel.updateOne({email: req.params.id,likes: {$in: req.body.postID}},{$pull: {likes: req.body.postID}})
    }catch(err){
        console.log(err);
    }
})

module.exports = router;