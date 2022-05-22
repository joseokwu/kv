import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { setLocationHistory } from "../utils/helpers";


export const ProtectedRoute = ({ ...props }) => {
  const history = useHistory();
  const { stateAuth } = useAuth();

  //user:token
  useEffect(() => {
    console.log(stateAuth.type[0]?.includes(props.type))
    console.log(stateAuth.type[0] , stateAuth.authenticated);
    console.log(props.type)
    if (!stateAuth.authenticated || !stateAuth.type[0]?.includes(props.type)) {
      // console.log(history.location.pathname)
      setLocationHistory(history.location.pathname);
      history.push("/");
    }

  }, [history,  stateAuth.authenticated, props.type , stateAuth.type]);

  return <Route {...props} />;
};
