import { ITask } from "../types/ITask";

export const useFilterLength = (data: ITask[]) => {
  const unfinishedTasks = data?.filter((task: ITask) => task.done === false);
  const lengthOfUnfinishedTasks = unfinishedTasks?.length;

  const lengthOfFinishedTasks = data?.length - lengthOfUnfinishedTasks;

  return {
    lengthOfUnfinishedTasks,
    lengthOfFinishedTasks,
  };
};
