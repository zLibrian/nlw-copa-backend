import { Request, Response } from "express";
import usersService from "../services/usersService";

const usersController = {
  list: async (_req: Request, res: Response): Promise<Response> => {
    const count = await usersService.list();
    return res.status(200).json({ count })
  },
}

export default usersController;