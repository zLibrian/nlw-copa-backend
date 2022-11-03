import { ICount } from "../interfaces/indx";
import connection from "./connection";

const guessesModel = {
  list: async (): Promise<ICount> => {
    const count = await connection.guess.count();
    return count;
  },
}

export default guessesModel;