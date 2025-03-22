import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router";

export default function GuestGuard() {
    const { accessToken } = useContext(UserContext)

    if (accessToken !== undefined) {
        return <Navigate to="/" />
    }

    return <Outlet />;
}