const { theaterService } = require("../services");

let post_theater = async (req, res) => {
    try {
        let body = req.body;
        let duplicate = await theaterService.findTheaterByName(body.name);
        if (duplicate) {
            throw new Error("Theater already created")
        }
        let theater = await theaterService.post_theater(body)
        res.status(201).json({
            message: "theater create success",
            theater
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let get_theater = async (req, res) => {
    try {
        let theater = await theaterService.get_theater()
        res.status(200).json({
            message: "Theater get success",
            theater
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_theater = async (req, res) => {
    try {
        let { id } = req.params;
        let theater = await theaterService.findByIdAndDelete(id)
        res.status(200).json({
            message: "Theater delete success",
            theater
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let update_theater = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let theater = await theaterService.findByIdAndUpdate(id, body);
        let newBody = {
            id,
            ...body
        }
        res.status(200).json({
            message: "Thater update successfully",
            newBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
module.exports = { post_theater, get_theater, delete_theater, update_theater }