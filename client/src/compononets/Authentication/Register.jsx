/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router";
import userService from "../../services/userService";
import { useActionState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Register() {

    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);

    const registerHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        try {
            const authData = await userService.register(values);
            userLoginHandler(authData);
            alert("Successfully registred")
            navigate('/catalogue');
        } catch (error) {
            alert(error.message)
        }
    }

    const [_, registerAction, isPending] = useActionState(registerHandler, { email: '', password: '', username: '' })

    return (
        <>
            <form className="formGen" action={registerAction}>

                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>

                <div className="signin">
                    <div className="content">
                        <h2>Sign Up</h2>
                        <div className="form">
                            <div className="inputBox">
                                <input type="text" name="username" required /> <i>Username</i>
                            </div>
                            <div className="inputBox">
                                <input type="email" name="email" required /> <i>Email</i>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="avatarUrl" required /> <i>Avatar Url</i>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="password" required /> <i>Password</i>
                            </div>
                            <div className="links"> <a href="#"></a> <Link to="/login">Login</Link>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Register" disabled={isPending} />
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}