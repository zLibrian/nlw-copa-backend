import poolsModel, { ICount } from "../models/poolsModel";

const poolsService = {
  list: async (): Promise<ICount> => {
    const count = await poolsModel.list();
    return count;
  },
};

export default poolsService;