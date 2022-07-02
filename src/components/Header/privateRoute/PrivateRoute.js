import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../context/UseAuth';
// import useFireBase from '../../../hooks/useFirebase/UsefireBase';

const PrivateRoute = ({children , ...rest}) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div>
            <Route
                {...rest}
                render={({location})=>user.email ? children :
                <Redirect
                to={{
                    pathname:"/login",
                    state:{from:location}
                }}
                
                ></Redirect>
            }
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;