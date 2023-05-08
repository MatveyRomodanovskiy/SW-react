import React, {Component} from 'react';
import images from "../config/images-pathes.json"
export const DreamTeam = () => {

        return (
            <section className="float-end w-50 row border mx-1">
                <h2 className="col-12 text-center">Dream Team</h2>
                {images.friend_pathes.map((p, id) => <img className="col-4 p-1" key={id} src={p} alt="friend"/>)}
            </section>
        );
}
export default DreamTeam;