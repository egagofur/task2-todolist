import { Controller } from "react-hook-form";

import TextField from "./TextField";
import { ModalTodoProps } from "../helpers/types/ITask";

const ModalTodo: React.FC<ModalTodoProps> = ({
  data,
  errors,
  handleSubmit,
  handleCancel,
  isSubmitting,
  onValid,
  control,
}) => {
  return (
    <div className="absolute bottom-0 w-full p-8 bg-white shadow-[0px_-80px_100px_40px_#00000024] rounded-t-3xl">
      <h2 className="mb-4 text-2xl font-semibold text-center text-text">
        New Task ToDo
      </h2>
      <hr />
      <form className="mt-8" onSubmit={handleSubmit(onValid)}>
        <div className="flex flex-col space-y-2">
          <Controller
            name="title"
            control={control}
            defaultValue={data?.title}
            render={({ field }) => (
              <TextField
                id="title"
                type="text"
                label="Title"
                placeholder="Add Title.."
                error={errors.title?.message}
                {...field}
              />
            )}
          />
        </div>
        <div className="flex flex-col mt-4 space-y-2">
          <label
            htmlFor="desc"
            className="text-xl font-semibold text-text font-jakartaPlus"
          >
            Description
          </label>
          <Controller
            name="desc"
            control={control}
            defaultValue={data?.desc}
            render={({ field }) => (
              <textarea
                id="desc"
                cols={10}
                rows={5}
                {...field}
                placeholder="Add Descriptions.."
                className="py-4 border-none rounded-lg bg-form focus:ring-0 focus:outline-none"
              ></textarea>
            )}
          />
          <p className="text-red-600 font-jakartaPlus">
            {errors.desc?.message}
          </p>
        </div>
        <div className="flex justify-between my-4 space-x-4">
          <Controller
            name="date"
            control={control}
            defaultValue={data?.date}
            render={({ field }) => (
              <TextField
                id="date"
                label="Date"
                type="date"
                error={errors.date?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="time"
            control={control}
            defaultValue={data?.time}
            render={({ field }) => (
              <TextField
                id="time"
                label="Time"
                type="time"
                error={errors.time?.message}
                {...field}
              />
            )}
          />
        </div>

        <div className="flex justify-between mt-8 space-x-4 ">
          <button
            onClick={handleCancel}
            className="w-full py-4 text-xl font-semibold bg-white border shadow-sm border-primary hover:text-white text-text rounded-xl font-jakartaPlus hover:bg-primary"
          >
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-4 text-xl font-semibold text-gray-100 border shadow-md rounded-xl font-jakartaPlus bg-primary hover:bg-primary/75"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalTodo;
