const { castService } = require("../services");
const uploadImage = require("../services/cloudinary.service");

async function post_cast(req, res) {
    try {
        console.log(req.file,"res");
        let body = req.body;
        let { path ,originalname} = req.file;
        
        let duplicate = await castService.findCastByName(body.name)
        if (duplicate) {
            throw new Error("member already exist")
        }

        let cloud = await uploadImage(path,originalname)
        let newBody = {
            ...body,
            image: cloud.url
        }

        let cast = await castService.post_cast(newBody)
        res.status(201).json({
            message: "Member Create successfully",
            cast
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function get_cast(req, res) {
    try {
        let cast = await castService.get_cast()
        res.status(200).json({
            message: "get cast member success",
            cast
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

async function delete_cast(req, res) {
    try {
        let { id } = req.params;
        let cast = await castService.findByIdAndDelete(id);

        res.status(200).json({
            message: "delete cast member success",
            cast,
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

async function update_cast(req, res) {
    try {
        let { id } = req.params;
        let body = req.body;
        let { path } = req.file;
        let newBody = {
            ...body,
            image: path
        }
        let secondBody = {
            id,
            ...newBody  
        }
        let cast = await castService.findByIdAndUpdate(id, newBody)
        res.status(200).json({
            message: "update cast member success",
            secondBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
module.exports = { post_cast, get_cast, delete_cast, update_cast }