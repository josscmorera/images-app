import React from 'react';

const DislikedImages = ({ urls }) => {
  return (
    <div className="disliked-images">
      <h2>Disliked Images</h2>
      {urls.map((url, index) => (
        <img key={index} src={url} className="disliked-image" />
      ))}
    </div>
  );
};

export default DislikedImages;