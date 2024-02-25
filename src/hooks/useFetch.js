import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {

        const getFetch = async () => {

            setLoadingState();

            const resp = await fetch(url);

            // Sleep (to test loader)
            await new Promise(resolve => setTimeout(resolve, 500));

            if (!resp.ok) {
                setState({
                    data: null,
                    isLoading: false,
                    hasError: true,
                    error: {
                        code: resp.status,
                        message: resp.statusText,
                    }
                });

                return;
            }

            const data = await resp.json();
            setState({
                data: data,
                isLoading: false,
                hasError: false,
                error: null
            });

            console.log({ data });
        };

        getFetch();

    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    };

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};
