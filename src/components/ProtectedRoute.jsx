import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/usersSlice";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const user = useSelector(selectUser);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
