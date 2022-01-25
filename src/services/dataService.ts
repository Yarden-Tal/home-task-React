// Libraries
import axios from "axios";
// TS
import { IDataService } from "../ts/interfaces/serviceInterfaces";

const BACKEND_URL: string = `https://api.coinstats.app/public/v1`;

const petsService: IDataService = (() => {
  return {
    getCoins: async () => {
      const resData = await axios.get(`${BACKEND_URL}/coins?skip=0&limit=10`);
      return resData;
    },
  };
})();

export default petsService;
