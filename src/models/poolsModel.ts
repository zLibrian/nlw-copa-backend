import ShortUniqueId from "short-unique-id";
import { ICount } from "../interfaces";
import connection from "./connection";

const poolsModel = {
  list: async (): Promise<ICount> => {
    const count = await connection.pool.count();
    return count;
  },
  create: async (title: string): Promise<string> => {
    const code = new ShortUniqueId({ length: 6 }).randomUUID().toUpperCase();
    await connection.pool.create({ data: { title, code } });
    return code;
  },
}

export default poolsModel;