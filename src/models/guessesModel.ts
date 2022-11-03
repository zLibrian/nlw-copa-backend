import { ICount } from "../interfaces";
import connection from "./connection";

const guessesModel = {
  list: async (): Promise<ICount> => {
    const count = await connection.guess.count();
    return count;
  },
}

export default guessesModel;