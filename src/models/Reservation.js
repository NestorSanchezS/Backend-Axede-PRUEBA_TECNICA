const { Schema, model } = require("mongoose");

const Reservation = new Schema({
    hotel: { 
        type: Schema.Types.ObjectId, 
        ref: 'Hotel', required: true 
    },
    room: { 
        type: Schema.Types.ObjectId, 
        ref: 'Room', required: true 
    },
    startDate: { 
        type: Date, required: true 
    },
    endDate: { 
        type: Date, required: true 
    },
    numberOfPeople: { 
        type: Number, 
        required: true 
    },
    accommodationType: { 
        type: String, enum: ['standard', 'premium', 'VIP'], 
        required: true 
    },
    season: { 
        type: Schema.Types.ObjectId, 
        ref: 'Season', required: true 
    }
});


module.exports = model('Reservation', Reservation);