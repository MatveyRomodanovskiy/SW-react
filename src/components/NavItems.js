import React from 'react';

const NavItems = ({itemTitle}) => {
    return (
        <li className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItems;