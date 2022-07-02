import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFireBase from '../../hooks/useFirebase/UsefireBase';

const LogIn = () => {
    const {signwithGoogle} = useFireBase();
    const history = useHistory();
    const location = useLocation();
    const redirect_URL = location.state?.from || "/home";
    console.log(location.state?.from);

    const handleGoogleLogin=()=>{
        signwithGoogle()
        .then(result=>{
            console.log(result.user);
            history.push(redirect_URL);
        })
    }
    return (
        <div>
            <h2  className="mt-5">Please Log In </h2>
            <div>
                <div className="mt-5">
                    <button onClick={handleGoogleLogin} className="btn-danger me-5">Google</button>
                    <button className="btn-danger">FaceBook</button>
                </div>
            </div>
            
        </div>
    );
};

export default LogIn;