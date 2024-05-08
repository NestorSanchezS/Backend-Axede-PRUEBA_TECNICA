const Reservation = require('../models/reservation');

exports.getReservations = async (req, res, next) => {
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