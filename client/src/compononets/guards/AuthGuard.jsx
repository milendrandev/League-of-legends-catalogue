import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router";

export default function AuthGuard() {
    const { accessToken } = useContext(UserContext)

    if (!accessToken) {
        return <Navigate to="/login" />
    }

    return <Outlet />;
}