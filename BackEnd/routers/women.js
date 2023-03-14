const router=require("express").Router();
const Women = require("../models/Women");



router.get('/:name',async(req,res)=>{
    try{
        // res.status(200).json(req.params.name);

        const women=await Women.findOne({name:req.params.name});

        {!women && res.status(401).json("Data is not founded") }
        // res.status(200).json(women);
        // res.send({status:"ok",data:women});
        res.status(200).send(women);
    }
    catch(err){
        // res.status(500).json(err);
        res.status(500).send(err);
    }
});

module.exports=router