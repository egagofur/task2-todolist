import { useMutation } from "@tanstack/react-query";

import { ITask } from "../types/ITask";
import { axiosInstance } from "../axios";

export const useUpdateTodo = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationKey: ["todos"],
    mutationFn: async (task: ITask) => {
      const { id, title, desc, date, time } = task;
      return await axiosInstance.patch(`/todos/${id}`, {
        title,
        desc,
        date,
        time,
      });
    },
    onSuccess,
  });
};
