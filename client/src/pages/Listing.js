import React, { useState } from "react";
const Listing = () => {
  const [url] = useState([
    "https://res.cloudinary.com/dac1at79b/image/upload/v1663683123/IMG_5102_w8mxfi.jpg",
  ]);
  const [url2] = useState([
    "https://res.cloudinary.com/dac1at79b/image/upload/v1663264454/cld-sample-4.jpg",
  ]);
  const [test1] = useState([
    "https://res.cloudinary.com/dac1at79b/image/upload/v1663773433/flipboard-hpZPl3cGOpE-unsplash_mkb061.jpg",
  ]);
  const [test2] = useState([
    "https://res.cloudinary.com/dac1at79b/image/upload/v1663773423/joseph-gonzalez-zcUgjyqEwe8-unsplash_nqplbi.jpg",
  ]);

  return (
    <div>
      <div>
        <h1>Cloudinary Uploaded Images</h1>
        <img src={url} alt="test" />
        <img src={url2} alt="test2" />
        <img src={test1} alt="test3" />
        <img src={test2} alt="test4" />
      </div>
    </div>
  );
};
export default Listing;
