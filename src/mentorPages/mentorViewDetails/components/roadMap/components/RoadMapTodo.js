import { ProgressBar } from "../../../../../mentorComponents";
import contributor from "../../../../../assets/images/contrib.svg";
import { formatDate } from "../../../../../utils/helpers";

export const RoadMapTodo = ({ progress = 0, data = {} }) => {
  return (
    <div className="road-map-todo">
      <p className="todo-task" style={{ flexBasis: "37%" }}>
        {data?.tabName}
      </p>
      <span>
        <p className="todo-info-header">Due Data</p>
        <p className="todo-date">{formatDate(data?.dueDate)}</p>
      </span>

      <span>
        <p className="todo-info-header">Contributors</p>
        <div className="todo-contributor">
          {data?.contributors?.length > 0 &&
            data?.contributors?.map((d, i) => {
              return <img src={d} alt="contributor" />;
            })}
        </div>
      </span>
      <span style={{ flexBasis: "22%" }}>
        <p className="todo-info-header">Progress</p>
        <ProgressBar
          isMeasured={true}
          className="todo-progress"
          progress={progress}
        />
      </span>
    </div>
  );
};
