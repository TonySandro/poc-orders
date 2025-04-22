import { Request, Response } from "express";
import loginService from "../../services/login/login.service";

const loginController = async (req: Request, res: Response) => {
  const login = req.body;

  try {
    const token = await loginService(login);
    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }
};

export { loginController };
