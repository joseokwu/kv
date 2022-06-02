import { useSelector, useDispatch } from "react-redux";
import { ADD_CRITERIA  } from "../store/actions/actions.types";
import { newCriteria } from "../store/actions/admin";

export const useAdmin = () => {
  const adminState = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const setCriteria = (data) => {
    dispatch(newCriteria(data));
  };
  
  return {
    adminState,
    setCriteria,
  };
};
