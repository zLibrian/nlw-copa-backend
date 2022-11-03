import { ICount } from "../interfaces/indx";
import connection from "./connection";

const usersModel = {
  list: async (): Promise<ICount> => {
    const count = await connection.user.count();
    return count;
  },
}

export default usersModel;