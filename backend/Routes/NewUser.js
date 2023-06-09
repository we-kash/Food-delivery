const express=require("express");
const router=express.Router()
const User =require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt =require("bcryptjs");
const jwt =require("jsonwebtoken");
const jwtSecret = "TheDeveloperOfThisProjectIsVIKASH$"
router.post("/createuser",
body('email','incorrect mail id').isEmail(),
body('name','enter a valid name').isLength({ min: 5 }),
body('password','Incorrect password').isLength({ min: 6 }),
async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt =await bcrypt.genSalt(15);
    let secpassword =await bcrypt.hash(req.body.password,salt)

    try{

      await  User.create({
            name:req.body.name,
            password:secpassword,
            location:req.body.location,
            email: req.body.email
            
        })
        res.json({success:true});
    }catch(error){
        console.log(error)
        res.json({success:false});
    }
})



router.post("/loginuser",
body('email','incorrect mail id').isEmail(),
body('password','Incorrect password').isLength({ min: 6 }),
 
async (req,res)=>{
    let email=req.body.email;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        let userData=await User.findOne({email})
        if(!userData){
            return res.status(400).json({ errors: " User not found " });
        }

        const pwCompare=await bcrypt.compare(req.body.password,userData.password)

        if(!pwCompare){
            return res.status(400).json({ errors: " Incorrect password or somehthing" });
        }

        const data={
            user: {
                id:userData.id
            }
        }
        const authtoken =jwt.sign(data,jwtSecret)
        return res.json({ success:true,authtoken:authtoken });

    }catch(error){
        console.log(error)
        res.json({success:false});
    }
})
module.exports = router;