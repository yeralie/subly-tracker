const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

//gathers all the subcriptions
router.get('/', async (req, res) => {
    const subs= await Subscription.find();
    res.json(subs);

});

//updates new subscriptions
router.post('/', async (req, res) => {
    const { name, amount, frequency, dueDate } = req.body;
    try {
        const newSub = new Subscription({ name, amount, frequency, dueDate});
        await newSub.save();
        res.status(201).json(newSub);
    }catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;