import React from 'react';
import './ImageCard.css';

const ImageCard = ({ url, onLike, onDislike }) => {
    return (
        <div className="image">
            <img src={url} className="photo" />
            <div className="buttons">
                <button onClick={() => onLike(url)} className="button">Like</button>
                <button onClick={() => onDislike(url)} className="button">Dislike</button>
            </div>
        </div>
    );
};

export default ImageCard;