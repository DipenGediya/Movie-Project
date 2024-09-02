const { moviesService } = require("../services");
const uploadImage = require("../services/cloudinary.service");

let postMovies = async (req, res) => {
    try {
        let body = req.body;
        let { path, originalname } = req.file;
        let cloud = await uploadImage(path, originalname)
        let newBody = {
            ...body,
            poster: cloud.url
        }
        let result = await moviesService.postMovies(newBody)
        // res.status(201).json({
        //     message: "movies create success",
        //     result
        // })

        res.redirect("/")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let getAllMovies = async (req, res) => {
    try {
        let result = await moviesService.getAllMovies()
        console.log(result, "for movies");
        res.status(200).json({
            message: "get movies success",
            result
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let deleteMovies = async (req, res) => {
    try {
        let { id } = req.params;
        let result = await moviesService.findByIdAndDelete(id)
        res.status(200).json({
            message: "delete movies success",
            result,
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let updateMovies = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let { path ,originalname } = req.file;
        let cloud = await uploadImage(path,originalname)
        let newBody = {
            ...body,
            poster: cloud.url
        };
        let secondNewBody = {
            id,
            ...newBody
        };
        let result = await moviesService.findByIdAndUpdate(id, newBody)
        // console.log(result,"update movies"); 
        res.status(200).json({
            message: "update movies success",
            secondNewBody,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { postMovies, getAllMovies, deleteMovies, updateMovies }