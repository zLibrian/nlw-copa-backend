import { ICount } from "../interfaces";
import poolsModel from "../models/poolsModel";

const poolsService = {
  list: async (): Promise<ICount> => {
    const count = await poolsModel.list();
    return count;
  },
  create: async (title: string): Promise<string> => {
    const code = await poolsModel.create(title);
    return code;
  },
};

export default poolsService;