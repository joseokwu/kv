import { useSelector, useDispatch } from "react-redux";

export const useAdmin = () => {
  const adminState = useSelector((state) => state.admin);

  return {
    adminState,
  };
};
