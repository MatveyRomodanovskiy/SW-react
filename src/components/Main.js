import React from 'react';
import images from "../config/images-pathes.json"
import DreamTeam from "./DreamTeam";
import {text} from "../config/text";
import Hero from "./Hero";
import FarGalaxy from "./FarGalaxy";
export const Main = () => {
    return (
                <main className="clearfix">
                   <Hero/>
                   <DreamTeam/>
                   <FarGalaxy/>
                </main>

        );

}

export default Main;