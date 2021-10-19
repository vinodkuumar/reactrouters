import React from 'react';
import ReactDom from 'react-dom';
import {Link, Redirect} from 'react-router-dom';

const Profile = (props) => {
    const redirectUser = () => {
        const userRedirect = true;
        if(userRedirect) {
            return(
                <Redirect to="/"/>
            )
        }
    }
    return(
        <>
        {redirectUser()}
        <div>
            Profile screen
        </div>
        <Link to="/posts">Go to posts</Link>
        </>
    )
}

export default Profile;