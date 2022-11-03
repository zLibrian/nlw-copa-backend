import { Request, Response } from "express";
import { z } from "zod";
import poolsService from "../services/poolsService";

const poolsController = {
  list: async (_req: Request, res: Response): Promise<Response> => {
    const count = await poolsService.list();
    return res.status(200).json({ count })
  },
  create: async (req: Request, res: Response): Promise<Response> => {
    const createPoolBody = z.object({
      title: z.string()
    });
    const { title } = await createPoolBody.parseAsync(req.body);

    const code = await poolsService.create(title);
    return res.status(201).json({ code });
  },
}

export default poolsController;