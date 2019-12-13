const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Book = require('../../model/Event')

router.get('/', async (req,res) => {
    const books = await Book.find()
    res.json({data: books})
})

router.get('/:email', async (req,res) => {
    try {
        const id = req.params.email
        const admin = await Book.find({
            email: id
        })
        if(!admin) return res.status(404).send({error: 'Admin does not exist'})
        var length = admin.length
        res.json({msg: 'Event found successfully', data: admin[0].name})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
})
router.post('/', async (req,res) => {
    const newBook = await Book.create(req.body)
    res.json({msg:'Event was created successfully', data: newBook})
})
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedBook = await Book.findByIdAndRemove(id)
     res.json({msg:'Event was deleted successfully', data: deletedBook})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 

module.exports = router