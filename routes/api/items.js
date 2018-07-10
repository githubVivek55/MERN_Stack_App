const express= require('express');
const router=express.Router();

const ItemModel = require('../../models/Item');

// @route GET api/items
// @desc GET all items
// @access Public
router.get('/',(req,res)=>{
    ItemModel.find()
    .sort({date:-1})
    .then(items=>res.json(items))
});

// @router POST api/items
// @desc create item
// @access public
router.post('/',(req,res)=>{
    const newitem=new ItemModel({
        name:req.body.name
    });

    newitem.save().then(item=>res.json(item));
});

// @router DELETE api/items/:id
// @desc delete item
// @access public

router.delete('/:id',(req,res)=>{
    ItemModel.findById(req.params.id)
        .then(item=>{item.remove().then(()=>{res=>{success:true}})})
        .catch(err=>{
            res.status(404).json({success:false})
        }) 
});


module.exports=router;