import { useSelector, useDispatch } from "react-redux";
import { ADD_CRITERIA  } from "../store/actions/actions.types";
import { newCriteria } from "../store/actions/admin";
import { useHistory } from "react-router-dom";



export const useAdmin = () => {
  const history = useHistory();
  const adminState = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const setCriteria = (data) => {
    dispatch(newCriteria(data));
    history.push('/admin/selection_process/new-criteria')
  };
  
  return {
    adminState,
    setCriteria,
  };
};
