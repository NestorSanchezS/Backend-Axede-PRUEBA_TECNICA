const Reservation = require('../models/reservation');
const Season = require('../models/season');

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


exports.checkAvailability = async (req, res) => {
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

exports.calculateRate = async (req, res) => {
    const { hotelId, accommodationType, seasonId, numberOfPeople } = req.body;
    try {
        const season = await Season.findById(seasonId);
        const rate = season.rates.find(
            rate => rate.campus === hotelId && rate.accommodationType === accommodationType
        );

        if (!rate) {
            return res.status(400).json({ message: 'Rate not found' });
        }

        const price = rate.price;
        const total = price * numberOfPeople;

        res.json({success:true, rate: total });
    } catch (error) {
        res.status(500).json({success:false, info: error.message });
    }
}