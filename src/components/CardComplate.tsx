import moment from "moment";

import { CardProps } from "../helpers/types/ITask";

const CardComplate: React.FC<CardProps> = ({
  task,
  handleUpdate,
  handleDelete,
  handleChecked,
}) => {
  return (
    <div className="flex items-center justify-between p-4 mt-4 line-through bg-white border-l-8 rounded-lg shadow-sm border-danger">
      <button className="w-full text-left" onClick={() => handleUpdate(task)}>
        <div className="flex flex-col max-w-xs md:max-w-lg font-jakartaPlus">
          <div className="mb-4 space-y-2">
            <h4 className="text-base font-bold text-gray-700">{task.title}</h4>
            <p className="text-sm font-medium text-gray-400">{task.desc}</p>
          </div>
          <hr />
          <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
            <h4>{moment(task.date).format("DD MMMM YYYY")}</h4>
            <h4 className="text-sm">{task.time}</h4>
            {task.createdAt !== task.updatedAt ? (
              <h4 className="text-sm italic font-medium text-gray-400 font-jakartaPlus">
                Complated At {moment(task.updatedAt).calendar()}
              </h4>
            ) : null}
          </div>
        </div>
      </button>
      <label className="flex flex-col items-center pb-6 space-y-4">
        <button
          onClick={() => handleDelete(task)}
          className="p-1 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          checked={task.done}
          onChange={() => handleChecked(task)}
          type="checkbox"
          className="w-6 h-6 rounded-full"
        />
      </label>
    </div>
  );
};

export default CardComplate;
