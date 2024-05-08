const { Schema, model } = require("mongoose");

const Season = new Schema({
    name: { 
        type: String, 
        required: true },
    startDate: { 
        type: Date, 
        required: true },
    endDate: { 
        type: Date, 
        required: true },
    rates: [{
        campus: { 
            type: String, 
            required: true },
        accommodationType: { 
            type: String, enum: ['standard', 'premium', 'VIP'], 
            required: true },
        price: { 
            type: Number, 
            required: true }
    }]
});

module.exports = model('Season', Season);