import { ICount } from "../interfaces";
import guessesModel from "../models/guessesModel";

const guessesService = {
  list: async (): Promise<ICount> => {
    const count = await guessesModel.list();
    return count;
  },
};

export default guessesService;