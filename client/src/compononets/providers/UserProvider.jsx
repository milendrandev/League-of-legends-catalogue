import { UserContext } from "../../contexts/UserContext"
import useSessionStorage from "../../hooks/useSessionStorage";

export default function UserProvider({ children }) {

    const [authData, setAuthData] = useSessionStorage('auth',{});

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