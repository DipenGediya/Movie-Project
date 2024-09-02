const { createToken } = require("../middleware/auth");
const { adminService } = require("../services");
const sendEmail = require("../services/email.service");

let postAdmin = async (req, res) => {
    try {
        let body = req.body;
        let duplicate = await adminService.findAdminByEmail(body.email)
        if (duplicate) {
            throw new Error("admin already exist")
        }
        let admin = await adminService.postAdmin(body);
        if (admin) {
            let result = await sendEmail(admin.email, "joining", "thank you")
        }
        res.status(201).json({
            message: "admin create success",
            admin
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let getAllAdmin = async (req, res) => {
    try {
        let result = await adminService.getAdmin()
        res.status(200).json({
            message: "get admin success",
            result,
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let deleteAdmin = async (req, res) => {
    try {
        let { id } = req.params
        let result = await adminService.findByIdAndDelete(id)
        res.status(200).json({
            message: "admin delete success",
            result
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let updateAdmin = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body
        let result = await adminService.findByIdAndUpdate(id, body)
        let newBody = {
            id,
            ...body
        }
        res.status(200).json({
            message: "admin update success",
            newBody,
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let admin = await adminService.findAdminByEmail(email)
        if (!admin) {
            throw new Error("Invalid Email")
        }
        if (admin.password !== password) {
            throw new Error("Invalid Password")
        }
        let token = createToken({ admin })
        res.cookie("token", token)
        res.status(200).json({
            message: "Admin login success",
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = { postAdmin, getAllAdmin, deleteAdmin, updateAdmin, login }