const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Account = require('../../model/Account');

///////////////////////////////////////

router.get('/', async (req,res) => {
    const acc = await Account.find()
    res.json({data: acc})
})

router.post('/', async (req,res) => {
    try{
    const newBook = await Account.create(req.body)
    res.json({msg:'Admin was created successfully', data: newBook})
    }
    catch(error){
        console.log(error)
    }
})


router.get('/:email', async (req,res) => {
    try {
        const id = req.params.email
        const admin = await Account.find({
            email: id
        })
        if(!admin) return res.status(404).send({error: 'Admin does not exist'})
        res.json({msg: 'Admin found successfully', data: admin})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
})
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedBook = await Account.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully', data: deletedBook})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 

module.exports = router