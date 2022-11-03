import { Request, Response } from "express";
import poolsService from "../services/poolsService";

const poolsController = {
  list: async (_req: Request, res: Response): Promise<Response> => {
    const count = await poolsService.list();
    return res.status(200).json({ count })
  },
}

export default poolsController;