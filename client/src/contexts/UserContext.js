import { createContext } from "react";


export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    avatarUrl: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});