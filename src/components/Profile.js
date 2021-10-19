import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

const Profile = () => {
    return(
        <>
        <div>
            Profile screen
        </div>
        <Link to="/posts">Go to posts</Link>
        </>
    )
}

export default Profile;