import React, {Component} from 'react';

export const Header = () => {
        return (
            <div>
                <header>
                    <nav className="fixed-top mt-1 ms-5">
                        <ul className="nav">
                            <li className="nav-item btn btn-danger mx-1">Home</li>
                            <li className="nav-item btn btn-danger mx-1">About me</li>
                            <li className="nav-item btn btn-danger mx-1">Star Wars</li>
                            <li className="nav-item btn btn-danger mx-1">Contact</li>
                        </ul>
                    </nav>
                    <h1 className="text-center py-4">Luke Skywalker</h1>
                </header>
            </div>
        );
}

export default Header;