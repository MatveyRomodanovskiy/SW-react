import React, {useState} from 'react';
import images from "../config/images-pathes.json"
import Friend from "./Friend";
export const DreamTeam = () => {
    const [viewimage, setImage] = useState('');
    const getImage = (pic) => {
        setImage(pic);
    };
    const closeHandler = () => {
        setImage('')
    }
        return (
            <div className="float-end w-50 row border mx-1" onClick={closeHandler}>
                <h2 className="col-12 text-center">Dream Team</h2>
                {viewimage && <img src={viewimage} />}
                {!viewimage && images.friend_pathes.map((p, id) => <Friend key={id} pos={id+1} picture={p} updateImage={getImage}/>)}
            </div>
        );
}
export default DreamTeam;