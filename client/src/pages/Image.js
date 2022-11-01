import React from "react";

const Image = ({ image }) => {
  return (
    <div className="card">
      <h3>{image.name}</h3>
      <p>Title - {image.title}</p>
      <p>Author - {image.author}</p>
    </div>
  );
};

export default Image;
