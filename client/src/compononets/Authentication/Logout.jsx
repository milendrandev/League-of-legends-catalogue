import { useContext, useEffect, useState } from "react";
import userService from "../../services/userService";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router";

export default function Logout() {
    const { accessToken, userLogoutHandler } = useContext(UserContext);
    const [isLoggedout, setIsLoggedout] = useState(false);
    useEffect(() => {
        if (accessToken == null)
            return;

        userService.logout(accessToken)
            .then(userLogoutHandler)
            .then(setIsLoggedout(true));
    }, [accessToken, userLogoutHandler])

    return isLoggedout
        ? <Navigate to="/login" />
        : null;
}