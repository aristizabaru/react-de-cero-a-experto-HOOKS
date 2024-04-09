import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h2>LoginPage <small>{user?.name}</small></h2>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button
                className="btn btn-primary"
                onClick={() => setUser({ id: 123, name: 'Daniela', email: 'dany@gmail.com' })}
            >Establecer usuario</button>
        </>
    );
};
