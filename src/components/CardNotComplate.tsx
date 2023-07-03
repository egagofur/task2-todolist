import moment from "moment";

import { CardProps } from "../helpers/types/ITask";

const CardNotComplate: React.FC<CardProps> = ({
  task,
  handleUpdate,
  handleChecked,
}) => {
  return (
    <div className="flex items-center justify-between p-4 mt-4 bg-white border-l-8 rounded-lg shadow-sm border-warning">
      <button className="w-full text-left" onClick={() => handleUpdate(task)}>
        <div className="flex flex-col max-w-xs md:max-w-lg font-jakartaPlus">
          <div className="mb-4 space-y-2">
            <h4 className="text-base font-bold text-gray-700">{task.title}</h4>
            <p className="text-sm font-medium text-gray-400 ">{task.desc}</p>
          </div>
          <hr className="w-full min-w-max" />
          <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
            <h4>{moment(task.date).format("DD MMMM YYYY")}</h4>
            <h4 className="text-sm">{task.time}</h4>
            {task.createdAt !== task.updatedAt ? (
              <h4 className="text-sm italic font-medium text-gray-400 font-jakartaPlus">
                Last updated {moment(task.updatedAt).calendar()}
              </h4>
            ) : null}
          </div>
        </div>
      </button>
      <label className="inline-flex items-center">
        <input
          checked={task.done}
          onChange={() => handleChecked(task)}
          type="checkbox"
          className="w-6 h-6 rounded-full "
        />
      </label>
    </div>
  );
};

export default CardNotComplate;
