import { useState } from 'react';

type ReturnProps = {
    hasError: boolean,
    errorMessage: string,
    setError: (error: string) => void,
    clear: () => void,
}

export const useError = (): ReturnProps => {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const setError = (error: string) => {
        setHasError(true)
        setErrorMessage(error)
    }

    const clear = () => {
        setHasError(false)
        setErrorMessage("")
    }

    return { hasError, errorMessage, setError, clear }
}
