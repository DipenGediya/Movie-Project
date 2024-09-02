const { createToken } = require("../middleware/auth");
const { userService } = require("../services");
const sendEmail = require("../services/email.service");

let postUser = async (req, res) => {
    try {
        let body = req.body;

        let duplicate = await userService.findUserByEmail(body.email)
        if (duplicate) {
            throw new Error("user already exist")
        }
        let user = await userService.postUser(body);
        if (user) {
            let result = await sendEmail(user.email, "joining", `thank you ${user.name} for joining with us`)
        }
        res.status(201).json({
            message: "userCreate success",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let getAllUser = async (req, res) => {
    try {
        let user = await userService.getAllUser()
        res.status(200).json({
            message: "user get success",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let deleteUSer = async (req, res) => {
    try {
        let { id } = req.params;
        let result = await userService.findByIdAndDelete(id)
        res.status(200).json({
            message: "delete user success",
            result,
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let result = await userService.findByIdAndUpdate(id, body);
        let newBody = {
            id,
            ...body
        }
        res.status(200).json({
            message: "user update success",
            newBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let login = async (req, res) => {
    try {
        console.log(req,"for user");
        let { email, password } = req.body;
        let user = await userService.findUserByEmail(email);
        if (!user) {
            throw new Error("Invalid Email")
        }
        if (user.password !== password) {
            throw new Error("Invalid Password")
        }

        let token = createToken({ user })
        res.cookie("token",token,{
            httpOnly: true, // This ensures the cookie is not accessible via JavaScript on the client
            expiresIn: 1000 * 60 * 60 * 24,
        })
        res.status(200).json({
            message: "login success",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = { postUser, getAllUser, deleteUSer, updateUser, login }