import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-semibold mb-2">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p className="mb-4">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'><button className="btn">Go to Home</button></Link>
            </div>
        </div>
    );
}

export default ErrorPage;