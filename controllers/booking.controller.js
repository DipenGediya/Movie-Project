const { bookingService, userService, moviesService } = require("../services");
const sendEmail = require("../services/email.service");

let post_booking = async (req, res) => {
    try {
        let body = req.body;
        let duplicate = await bookingService.findBookingByseatNumberAndRow(body.screenNumber, body.seatType, body.row, body.seatNumber)
        if (duplicate) {
            throw new Error("Seat Already Booked")
        }
        let booking = await bookingService.post_booking(body);
        let movie = await moviesService.findMovieById(body.movies)
        let user = await userService.findUserById(body.user)

        if (user) {
            let result = await sendEmail(user.email,"Movie Booking",`youe ticket for ${movie.moviesName} is book`)
        }
        res.status(201).json({
            message: "Booking Done Successfully",
            booking
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let get_booking = async (req, res) => {
    try {
        let booking = await bookingService.get_booking()
        res.status(200).json({
            message: "Get booking successfully",
            booking
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_booking = async (req, res) => {
    try {
        let { id } = req.params
        let booking = await bookingService.findByIdAndDelete(id);
        res.status(200).json({
            message: "Booking delete successfully",
            booking
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let update_booking = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let booking = await bookingService.findByIdAndUpdate(id, body)
        let newBody = {
            id,
            ...body
        }
        res.status(200).json({
            message: "Booking update successfully",
            newBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
module.exports = { post_booking, get_booking, delete_booking, update_booking }