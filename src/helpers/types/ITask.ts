import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";

import { TModalTodo } from "../../pages/Todo";

export interface ITask {
  id?: string;
  title: string;
  desc: string;
  done?: boolean;
  date: string;
  time: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ITaskForm {
  title: string;
  desc: string;
  date: string;
  time: string;
}

export interface ModalTodoProps {
  handleModal: () => void;
  data: ITask;
  handleSubmit: UseFormHandleSubmit<TModalTodo>;
  errors: FieldErrors<{
    title: string;
    desc: string;
    date: string;
    time: string;
  }>;
  handleCancel: () => void;
  isSubmitting: boolean;
  control: Control<TModalTodo>;
  onValid: SubmitHandler<TModalTodo>;
}

export interface CardProps {
  task: ITask;
  handleUpdate: (task: ITask) => void;
  handleDelete: (task: ITask) => void;
  handleChecked: (task: ITask) => void;
}
