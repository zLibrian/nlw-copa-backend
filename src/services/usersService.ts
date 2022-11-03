import { ICount } from "../interfaces/indx";
import usersModel from "../models/usersModel";

const usersServices = {
  list: async (): Promise<ICount> => {
    const count = await usersModel.list();
    return count;
  },
};

export default usersServices;