import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../axios";
import { ITask } from "../types/ITask";

export const useDeleteTodo = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: async (task: ITask) => {
      const { id } = task;
      await axiosInstance.delete(`/todos/${id}`);
    },
    onSuccess,
  });
};
