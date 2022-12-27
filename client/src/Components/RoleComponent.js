import React from 'react';

const RoleComponent = (props) => {

    if(props.user.role == props.role){
        return <div>
            {props.children}
        </div>

    }
    return null;
}

export default RoleComponent;
