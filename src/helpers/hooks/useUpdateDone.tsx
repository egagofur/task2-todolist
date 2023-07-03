import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../axios";
import { ITask } from "../types/ITask";

export const useUpdateDone = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation(
    ["todos"],
    async (task: ITask) => {
      const { id, done } = task;
      return await axiosInstance.patch(`/todos/${id}`, {
        ...task,
        done: !done,
      });
    },
    {
      onSuccess,
    }
  );
};
