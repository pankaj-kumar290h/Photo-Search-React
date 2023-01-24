import React, { useState } from "react";
import "./ImageCard.css";
import { AiOutlineCloudDownload } from "react-icons/ai";

function ImageCard({ obj }) {
  const [show, setShow] = useState(false);
  const model = () => {
    setShow(!show);
  };
  return (
    <>
      <div style={{ display: show ? "block" : "none" }} className="model">
        <p onClick={model}>X</p>
        <div onClick={model}>
          <img src={obj.urls.regular} alt="k" />
        </div>
      </div>
      <div onClick={model} className="card_body">
        <div className="image">
          <img src={obj.urls.regular} alt="j" />
          <a
            onClick={(e) => {
              e.stopPropagation();
            }}
            target="_blank"
            rel="noreferrer"
            className="download_button"
            href={obj.urls.raw}
            download
          >
            <AiOutlineCloudDownload />
          </a>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
