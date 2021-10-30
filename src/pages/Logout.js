import { logout } from "helpers/api/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userLogout } from "store/Auth/actions";

export default function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    logout()
      .then(() => dispatch(userLogout()))
      .then(() => history.push("/"));
  }, [history, dispatch]);

  return (
    <div className="text-center d-flex justify-content-center align-items-center">
      Logging out...
    </div>
  );
}
