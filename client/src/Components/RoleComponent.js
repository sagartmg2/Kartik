import React from 'react';
import { useSelector } from 'react-redux';


const RoleComponent = (props) => {
    const user = useSelector(state => state.user.value)
    console.log("reduxuser", user)


    if (user?.role == props?.role) {// props drilling
        // if (props?.user?.role == props?.role) {// props drilling
        return <div>
            {props.children}
        </div>
    }

    return null;
}

export default RoleComponent;
