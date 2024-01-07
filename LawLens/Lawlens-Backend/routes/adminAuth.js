//  Resolve Path issue ---> Allows traversing b/w pages without check

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin') ;
const { body, validationResult } = require('express-validator');
const JWT_SECRET = "@@@@";



// Route-01 : For Admin Creation
router.post('/create', [
    body('adminname', 'Enter a Valid Username').isLength({ min: 3 }),
    body('email', ' Enter correct Email').isEmail(),
    body('password', 'Password must be 8 character long').isLength({ min: 8 }),

], async (req, res) => {

    // validate User Request
    const result = validationResult(req);

    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
    }

    try {

        // Checking User in database
        let admin = await Admin.findOne({ email: req.body.email });
        if (admin) {
            return res.status(400).json({ errors: "User with this email already exist" });
        }

        // Hashing the password with salt ---> using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        // Creating user 
        admin = await Admin.create({
            adminname: req.body.adminname,
            email: req.body.email, 
            password: hashedPass,
            address1 : req.body.address1,
            address2 : req.body.address2,
            state : req.body.state,
            city : req.body.city,
            zip : req.body.zip

        })

        const Data = {
            id: admin.id
        }

        // Forming JWT auth. token for user
        const authToken = jwt.sign(Data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong!");
    }

});

// Route-02 : For admin Login
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
    try { 

        // finding admin with entered Email
        let admin = await Admin.findOne({ email: email });

        // checking is admin with given mail exist
        if (!admin) {
            return res.status(400).json({ errors: "Please enter correct Credentials" });
        }

        // Comparing for password
        const containsPass = await bcrypt.compare(password, admin.password);
        if (!containsPass) {
            return res.status(400).json({ errors: "Please enter correct Credentials" });
        }

        // if all well generate a auth token and return
        const Data = {
            id: admin.id
        }
        const authToken = jwt.sign(Data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).send("Something went Wrong!");
    }
})



module.exports = router;


