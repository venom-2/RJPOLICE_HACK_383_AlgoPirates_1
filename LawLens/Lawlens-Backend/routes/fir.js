const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const FIR = require('../models/FIR');
const User = require('../models/User');
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = process.env.JWT_SECRET || "@@@@";

// Route-01 : For FIR Creation
router.post('/create', async (req, res) => {
    try {
        // Validate User Request
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        // Check User in the database
        const user = await User.findOne({ adharno: req.body.adharno });
        if (!user) {
            return res.status(400).json({ error: "User validation failed!" });
        }

        // Create FIR
        const fir = await FIR.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            city: req.body.city,
            state: req.body.state,
            adharno: req.body.adharno,
            userid : user.id,
            description: req.body.description
        });

        const data = {
            id: user.id
        };

        // Form JWT auth token for user
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong!" });
    }
});


// Fetch All FIR's
router.get('/fetchallfir', fetchuser, async(req,res)=>{
    
    try {
        const fir =  await FIR.find({userid : req.user.id});
        console.log(req.user.id)
        res.json(fir);    
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).send("Something went Wrong!");
    }

})

module.exports = router;
