import { ICount } from "../interfaces/indx";
import guessesModel from "../models/guessesModel";

const guessesService = {
  list: async (): Promise<ICount> => {
    const count = await guessesModel.list();
    return count;
  },
};

export default guessesService;