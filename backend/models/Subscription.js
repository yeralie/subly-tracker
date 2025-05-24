const mongoose = require ('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    name: { type: String, required: true},
    amount: { type: Number, required: true },
    frequency: { type: String, enum: ['monthly', 'yearly'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);