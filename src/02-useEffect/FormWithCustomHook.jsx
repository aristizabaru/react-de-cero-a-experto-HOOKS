import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    return (
        <>
            <h1>Form with Custom Hook</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="mt-4" onClick={onResetForm}>Borrar</button>
        </>
    );
};
