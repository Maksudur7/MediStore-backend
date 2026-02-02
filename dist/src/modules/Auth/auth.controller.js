import { authService } from "./auth.service";
const regsterUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await authService.regsterUser(user);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Registration Failed",
            details: error.message
        });
    }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.loginUser(email, password);
        res.status(201).json({
            success: true,
            message: "User login successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Login Failed",
            details: error.message
        });
    }
};
export const authController = {
    regsterUser,
    loginUser
};
//# sourceMappingURL=auth.controller.js.map