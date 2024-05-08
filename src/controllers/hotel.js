const Hotel =  require('../models/hotel');


exports.getHotels = async (res, next) => {
    try {
        const hotels = await Hotel.find();
       return  res.json({success: true, info: "Query do it successfully", data: hotels});
    } catch (error) {
        next(error);
    }
}
