import { AuthProvider } from './auth';
import { CenteredMiddleBox } from './components';
import { Routes } from './routes/Index';

const onAuthLoading = () => {
    return (
        <CenteredMiddleBox>
            Loading...
        </CenteredMiddleBox>
    )
}

const onAuthError = (error: any) => {
    return (
        <CenteredMiddleBox>
            Error: {error}
        </CenteredMiddleBox>
    )
}

function App() {
    return (
        <AuthProvider onLoading={onAuthLoading} onError={onAuthError}>
            <Routes />
        </AuthProvider>
    )
}

export default App
