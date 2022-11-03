import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

const errorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.issues.map((issue) => issue.message) });
  }
  return res.status(500).json({ message: err.message })
}

export default errorHandler;