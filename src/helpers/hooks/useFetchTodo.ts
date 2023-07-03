import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../axios";

export const useFetchTodo = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/todos");
      return data;
    },
  });
};
