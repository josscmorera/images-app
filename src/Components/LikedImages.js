import React from 'react';
import './LikedImages.css';

const LikedImages = ({ urls }) => {
    return (
        <div className="liked-images">
            <h2>Liked Images</h2>
            {urls.map((url, index) => (
                <img key={index} src={url} className="liked-image" />
            ))}
        </div>
    );
};

export default LikedImages;
