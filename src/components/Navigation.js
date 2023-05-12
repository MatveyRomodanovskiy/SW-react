import React from 'react';
import {navs} from "../config/navs";
import NavItems from "./NavItems";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-1 ms-5">
            <ul className="nav">
                {navs.map(i => <NavItems key={i} itemTitle={i}/>) }
            </ul>
        </nav>
    );
};

export default Navigation;