import connection from "./connection";

export type ICount = number
export interface IPool {
  count: ICount;
}

const poolsModel = {
  list: async (): Promise<ICount> => {
    const count = await connection.pool.count();
    return count;
  }
}

export default poolsModel;