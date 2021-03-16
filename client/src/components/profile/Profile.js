import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getProfile } from '../../js/actions/userAction';

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProfile());
    }, [dispatch]);
    const {user,isAuth,loading} = useSelector(state => state.userReducer)
    return (
        <div>
           {
               loading ? <h1>Loading ...</h1> : !isAuth ? <Redirect to="/login"/> : 
               <div>
                   <p>{user.name}</p>
                   <p>{user.lastName}</p>
                   <p>{user.email}</p>
               </div>
           }
        </div>
    )
}

export default Profile
