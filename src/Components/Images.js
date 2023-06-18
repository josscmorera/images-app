import { useState } from 'react';
import ImageCard from './ImageCard';
import LikedImages from './LikedImages';
import DislikedImages from './DislikedImages';
import './Images.css';

const Images = ({ urls }) => {
    const [images, setImages] = useState(urls);
    const [liked, setLiked] = useState([]);
    const [disliked, setDisliked] = useState([]);

    const like = (url) => {
        setImages(images.filter(image => image !== url));
        setLiked(liked.concat(url));
    };

    const dislike = (url) => {
        setImages(images.filter(image => image !== url));
        setDisliked(disliked.concat(url));
    };

    return (
        <div className="images-container">
            <div className="images">
                {images.map((url, index) => (
                    <ImageCard key={index} url={url} onLike={like} onDislike={dislike} />
                ))}
            </div>
            <div className="disliked-container">
                <LikedImages urls={liked} />
                <DislikedImages urls={disliked} />
            </div>
        </div>
    );
};

export default Images;
