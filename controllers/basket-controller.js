const { Basket } = require('../models')


async function index(req, res, next){
    try{
        const allBaskets = await Basket.find({}).populate('basket')
        res.status(200).json(allBaskets)

    }catch(err){
        console.log(err)
        res.status(400).json({
            error: err.message,
        })
    }
}

async function create(req, res, next){
    try{
        const newBasket = await Basket.create(req.body)
        res.status(201).json(newBasket)
    }catch(err){
        console.log(err)
        res.status(400).json({
            error: err.message,
        })
    }
}

async function detail(req, res, next){
    try{
        const foundBasket = await Basket.findById(req.params.id)
        res.status(201).json(foundBasket)
    }catch(err){
        console.log(err)
        res.status(400).json({
            error: err.message,
        })
    }
}

async function update(req, res, next){
    try{
        const updatedBasket = await Basket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(201).json(updatedBasket)
    }catch(err){
        console.log(err)
        res.status(400).json({
            error: err.message,
        })
    }
}

async function destroy(req, res, next){
    try{
        const deletedBasket = await Basket.findByIdAndRemove(req.params.id)
        res.status(200).json(deletedBasket)
    }catch(err){
        console.log(err)
        res.status(400).json({
            error: err.message,
        })
    }
}

module.exports = {
    index,
    create,
    show: detail,
    update,
    delete: destroy
}