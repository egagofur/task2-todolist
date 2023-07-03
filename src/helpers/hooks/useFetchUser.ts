import { useQuery } from "@tanstack/react-query";

import { axiosInstanceUser } from "../axios";

export const useFetchUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const data = axiosInstanceUser.get("/egagofur");
      return data;
    },
  });
};
