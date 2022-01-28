import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "./constants";

export const useGetCurrencies = (from, to) =>
  useQuery(
    `${from}_${to}`,
    async () => {
      const { data } = await axios.get(`${API_URL}${from}/${to}`);
      return data;
    },
    { enabled: from !== to }
  );
