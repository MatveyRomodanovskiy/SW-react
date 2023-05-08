import React, {Component} from 'react';
import images from "../config/images-pathes.json"
import DreamTeam from "./DreamTeam";
import {text} from "../config/text";
export const Main = () => {
    return (
            <div>
                <main className="clearfix">
                    <section className="float-start w-25 me-3">
                        <img className="w-100" src={images.main} alt="Hero"/>
                    </section>
                   <DreamTeam/>
                    <p className="farGalaxy">{text}
                    </p>
                </main>
            </div>
        );

}

export default Main;