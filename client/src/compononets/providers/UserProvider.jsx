import { useState } from "react";
import { UserContext } from "../../contexts/UserContext"
export default function UserProvider({ children }) {

    const [authData, setAuthData] = useState({});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };
    const userLogoutHandler = () => {
        setAuthData({});
    };

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            {children}
        </UserContext.Provider>
    )
}