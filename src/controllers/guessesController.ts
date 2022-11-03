import { Request, Response } from "express";
import guessesService from "../services/guessesService";

const guessesController = {
  list: async (_req: Request, res: Response): Promise<Response> => {
    const count = await guessesService.list();
    return res.status(200).json({ count })
  },
}

export default guessesController;