const { Schema, model } = require("mongoose");

const Hotel =  new Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        location: { 
            type: String, 
            required: true 
        },
        maxinumCapacityRoom: { 
            type: Number, 
            required: true 
        },
        bedrooms: [
            {
            type: { 
                type: String, 
                enum: ['standard', 'premium', 'VIP'], 
                required: true },
                cantidad: { 
                    type: Number, 
                    required: true 
                }
        }]
    });

module.exports = model('Hotel', Hotel);