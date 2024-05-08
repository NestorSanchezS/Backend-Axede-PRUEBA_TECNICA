const Reservation = require('../models/reservation');

exports.createReservation = async (req, res) => {
    const { hotelId, roomId, startDate, endDate, numberOfPeople, accommodationType, seasonId } = req.body;
    try {
        const reservation = new Reservation({
            hotel: hotelId,
            room: roomId,
            startDate,
            endDate,
            numberOfPeople,
            accommodationType,
            season: seasonId
        });

        await reservation.save();

        res.json({success: true, info: 'Reservation made' });
    } catch (error) {
        res.status(500).json({ success: false, info: error.message });
    }
}


exports.checkAvailability = async (req, res, next) => {
    const { hotelId, startDate, endDate } = req.body;
    try {
        const reservations = await Reservation.find({
            hotel: hotelId,
            startDate: { $lte: endDate },
            endDate: { $gte: startDate }
        });

        let roomsAvailable = true;

        reservations.forEach(reservation => {
            if (
                reservation.startDate <= endDate &&
                reservation.endDate >= startDate
            ) {
                roomsAvailable = false;
            }
        });

        if (roomsAvailable) {
            res.json({success:true, info: 'Rooms available' });
        } else {
            res.json({success:false, info: 'Rooms not available' });
        }
    } catch (error) {
        res.status(500).json({ success:false, info: error.message });
    }
}