import { AxiosResponse } from "axios";

export interface IDataService {
  getCoins: () => Promise<AxiosResponse<any, any>>;
}
