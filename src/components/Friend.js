import React from 'react';

const Friend = ({picture, pos, updateImage}) => {
      let styles = "col-4 p-1 "
    if (pos === 7){
        styles +="bottomLeft"
    }
    if (pos === 9){
        styles +="bottomRight"
    }
    const handleChange = () =>{
        updateImage(picture);
    }
    return (
        <img className={styles}  src={picture}  alt="friend" onDoubleClick={handleChange}/>
    );
};

export default Friend;