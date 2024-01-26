const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/User');  
 
const JWT_SECRET = "@@@@";


const { body, validationResult } = require('express-validator');

// Route-01 : For User Creation
router.post('/createUser', [
    body('username', 'Enter a Valid Username').isLength({ min: 3 }),
    body('email', ' Enter correct Email').isEmail(),
    body('password', 'Password must be 8 character long').isLength({ min: 8 }),
    body('adharno', 'Enter a valid Aadhar number').isLength({ min: 12, max: 12 }),
    body('mobileno', 'Enter a valid mobile number').isMobilePhone(),

], async (req, res) => {

    // validate User Request
    const result = validationResult(req);

    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
    }

    try {

        // Checking User in database
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ errors: "User with this email already exist" });
        }

        // Hashing the password with salt ---> using bcrypt
        // const salt = await bcrypt.genSalt(10);
        // const hashedPass = await bcrypt.hash(req.body.password, salt);

        // Creating user 
        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            adharno: req.body.adharno,
            mobileno: req.body.mobileno
        })

        const Data = {
            id: user.id
        }

        // Forming JWT auth. token for user
        const authToken = jwt.sign(Data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong!");
    }

});


// Route-02 : For user Login
router.post('/login', [
    body('email', ' Enter correct Email').isEmail(),
    body('password', 'Enter password').exists(),
], async (req, res) => {
    const result = validationResult(req);

    // User creation using express-validator -- No login required

    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
    }

    
    // De-structuring request
    const { email, password } = await req.body;
    // if(req.param.id !== email) {
    //     return res.status(400).json({ errors: "Please enter correct link galat h" });
    // }
    try { 

        // finding user with entered Email
        let user = await User.findOne({ email: email });

        // checking is user with given mail exist
        if (!user) {
            return res.status(400).json({ errors: "Please enter correct Credentials" });
        }

        // Comparing for password
        const containsPass = await bcrypt.compare(password, user.password);
        if (!containsPass) {
            return res.status(400).json({ errors: "Please enter correct Credentials" });
        }

        // if all well generate a auth token and return
        const Data = {
            id: user.id
        }
        const authToken = jwt.sign(Data, JWT_SECRET);
        res.json({ authToken : authToken , name : user.username});

    } catch (error) { 
        console.error("Login Error:", error);
        res.status(500).send("Something went Wrong!");
    }
})

// Export the router
module.exports = router;