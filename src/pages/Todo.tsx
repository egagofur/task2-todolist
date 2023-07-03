import * as yup from "yup";
import { useCallback, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ButtonCreate,
  CardComplate,
  CardNotComplate,
  Header,
  Loading,
  ModalTodo,
} from "../components";
import { ITask, ITaskForm } from "../helpers/types/ITask";
import {
  useCreateTodo,
  useDeleteTodo,
  useFetchTodo,
  useFilterLength,
  useUpdateDone,
  useUpdateTodo,
} from "../helpers";

const schema = yup.object().shape({
  title: yup.string().min(1).max(40).required("Title is required"),
  desc: yup.string().max(100, "Max 100 Character").required("Desc is required"),
  date: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
});

export type TModalTodo = yup.InferType<typeof schema>;

function Todo() {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, refetch: refetchTodo } = useFetchTodo();

  const queryClient = useQueryClient();

  const {
    lengthOfUnfinishedTasks: lengthUnfinished,
    lengthOfFinishedTasks: lengthFinished,
  } = useFilterLength(data?.data);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TModalTodo>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      desc: "",
      date: "",
      time: "",
    },
  });

  const handleModal = useCallback(() => {
    setShowModal((showModal) => !showModal);
  }, []);

  const { mutate: createTodo, isLoading: createTodoLoading } = useCreateTodo({
    onSuccess: () => {
      toast.success("Success Create Task");
      reset();
      refetchTodo();
      handleModal();
    },
  });

  const { mutate: deleteTodo } = useDeleteTodo({
    onSuccess: () => {
      toast.error("Success Delete Task");
      refetchTodo();
    },
  });

  const { mutate: doneTask } = useUpdateDone({
    onSuccess: () => {
      toast.success("Success Update Task");
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const { mutate: updateTodo, isLoading: updateTodoLoading } = useUpdateTodo({
    onSuccess: () => {
      toast.success("Success Update Task");
      reset({
        title: "",
        desc: "",
        date: "",
        time: "",
      });
      queryClient.invalidateQueries(["todos"]);
      handleModal();
    },
  });

  const { mutate: cancelSubmit } = useMutation({
    mutationFn: async () => {
      toast.error("Cancel Submit");
    },
    onSuccess: () => {
      reset({
        title: "",
        desc: "",
        date: "",
        time: "",
      });
      handleModal();
    },
  });

  const onValid = useCallback(
    (data: ITask) => {
      if (data.id) return updateTodo(data);
      createTodo(data as ITaskForm);
    },
    [createTodo, updateTodo]
  );

  const handleChecked = useCallback(
    (task: ITask) => {
      doneTask(task);
    },
    [doneTask]
  );

  const handleDelete = useCallback(
    (task: ITask) => {
      deleteTodo(task);
    },
    [deleteTodo]
  );

  const handleUpdate = useCallback(
    (task: ITask) => {
      reset(task);
      handleModal();
    },
    [reset, handleModal]
  );

  const handleCancel = useCallback(() => {
    cancelSubmit();
  }, [cancelSubmit]);

  return (
    <main className="relative h-screen max-w-2xl mx-auto overflow-x-hidden scrollbar-hide bg-bgDark">
      <div className="p-8">
        <Header />
        <Toaster />
        <section>
          <div className="mt-4">
            <h3 className="pb-2 text-xl font-bold text-gray-700 font-jakartaPlus">
              On Progress
              <span className="ml-2 font-normal text-gray-500">
                ( {lengthUnfinished} )
              </span>
            </h3>
            <div className="overflow-y-scroll max-h-80 scrollbar-hide">
              {data?.data.length > 0 &&
                data?.data
                  .filter((task: ITask) => task.done === false)
                  .map((task: ITask) => (
                    <CardNotComplate
                      key={task.id}
                      task={task}
                      handleUpdate={handleUpdate}
                      handleChecked={handleChecked}
                      handleDelete={handleDelete}
                    />
                  ))}
            </div>
            {isLoading && <Loading />}
          </div>

          <div className="mt-4">
            <h3 className="pb-2 text-xl font-bold text-gray-700 font-jakartaPlus">
              Complated
              <span className="ml-2 font-normal text-gray-500">
                ( {lengthFinished} )
              </span>
            </h3>
            <div className="overflow-y-scroll max-h-80 scrollbar-hide">
              {data?.data.length > 0 &&
                data?.data
                  .filter((task: ITask) => task.done === true)
                  .map((task: ITask) => (
                    <CardComplate
                      key={task.id}
                      task={task}
                      handleUpdate={handleUpdate}
                      handleDelete={handleDelete}
                      handleChecked={handleChecked}
                    />
                  ))}
            </div>
            {isLoading && <Loading />}
          </div>
        </section>
      </div>

      {showModal ? (
        <ModalTodo
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          handleModal={handleModal}
          control={control}
          errors={errors}
          isSubmitting={isSubmitting}
          onValid={onValid}
          data={data}
        />
      ) : (
        <ButtonCreate
          disabled={isSubmitting || createTodoLoading || updateTodoLoading}
          handleModal={handleModal}
        />
      )}
    </main>
  );
}

export default Todo;
