import { useEffect, useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'aristizabaru',
        email: 'andres.aristizabal@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    useEffect(() => {
        console.log('Use Effect Called');
    }, []);

    useEffect(() => {
        console.log('Form State Changed');
    }, [formState]);


    return (
        <>
            <h1>Simple Form</h1>
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
                placeholder="nombre@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>
    );
};
