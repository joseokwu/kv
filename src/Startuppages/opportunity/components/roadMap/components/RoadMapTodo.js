import { ProgressBar } from "../../../../../Startupcomponents";
import contributor from "../../../../../assets/images/contrib.svg";

export const RoadMapTodo = ({ progress = 0 }) => {
  return (
    <div className="road-map-todo">
      <p className="todo-task">Drafting of business structure</p>
      <span>
        <p className="todo-info-header">Due Data</p>
        <p className="todo-date">21 October, 2021</p>
      </span>

      <span>
        <p className="todo-info-header">Contributors</p>
        <div className="todo-contributor">
          <img src={contributor} alt="contributor" />
          <img src={contributor} alt="contributor" />
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
