import { HeadWrapper, TodoCard } from "./dash.component";
import { images } from "../../../constants/domiData";
import { Tag } from "../../../Startupcomponents";
import { useHistory } from "react-router-dom";
import dateFormat from "dateformat";
import { months } from "../../../utils/helpers";

export const TodoList = ({ data }) => {
  const todoArr = [1];
  const toArr = [1];
  const history = useHistory();

  return (
    <div className="container">
      <HeadWrapper className="d-flex justify-content-between">
        <h5 className="text-nowrap">To Do List</h5>
        <span
          className="text-nowrap"
          onClick={() => history.push("/startup/todolist")}
        >
          See All
        </span>
      </HeadWrapper>
      <div className="row" style={{ columnGap: 10 }}>
        {data?.map((d, i) => (
          <TodoCard key={i} className="col-lg-6 col-12">
            <div className="d-flex justify-content-between head">
              <h6>Assignment</h6>
              {/* <CustomThreeDots /> */}
            </div>

            <div className="d-flex justify-content-between my-3 date">
              <span>
                {new Date(d?.date).getDate()} |{" "}
                {months[new Date(d?.date).getMonth()]}
              </span>
              {new Date().getTime() === new Date(d.date).getTime() ? (
                <Tag name="Today" color="#058DC1" bg="#DEF6FF" />
              ) : (
                <div></div>
              )}
            </div>

            <div className="">
              <p>{d.description}</p>
            </div>

            <div className="mt-4 mb-2 foot">
              <span>Assigned to</span>
              <span className="mx-4">
                {images.map((data, i) => (
                  <img className="mx-n2" key={i} src={data.icon} />
                ))}
              </span>
            </div>
          </TodoCard>
        ))}
      </div>
    </div>
  );
};
