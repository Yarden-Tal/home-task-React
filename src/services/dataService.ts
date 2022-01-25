// Libraries
import axios from "axios";

const BACKEND_URL: string = `https://api.coinstats.app/public/v1`;

const petsService: any = (() => {
  return {
    getCoins: async (data: any) => {
      const resData = await axios.get(`${BACKEND_URL}/coins?skip=0&limit=10`);
      return resData;
    },
  };
})();

export default petsService;
