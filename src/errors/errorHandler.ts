import { NextFunction, Request, Response } from "express";
import { AppError } from "./errors";

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    const { message, statusCode } = error;
    return response.status(statusCode).json({ message });
  }

  console.log(error);

  return response.status(500).json({
    message: "Internal server error",
  });
};
