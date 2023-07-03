import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../axios";
import { TModalTodo } from "../../pages/Todo";

export const useCreateTodo = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: async (data: TModalTodo) => {
      const response = await axiosInstance.post("/todos", data);
      return response.data;
    },
    onSuccess,
  });
};
