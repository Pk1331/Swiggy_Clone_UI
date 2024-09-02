import React, { useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { ImageData } from "../Pages/Static_images";
const ItemDisplay = () => {
  const [images, setimages] = useState(ImageData);
  const scrollHandler = (direction) => {
    const chainitem = document.getElementById("displaysec");
    const scrollamt =400;
    if (direction == "left") {
      chainitem.scrollTo({
        left: chainitem.scrollLeft - scrollamt,
        behavior: "smooth",
      });
    } else if (direction == "right") {
      chainitem.scrollTo({
        left: chainitem.scrollLeft + scrollamt,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="titleAndbtn">
        <h2 className="displaytitle">What's on your mind?</h2>
        <div className="BtnGrp">
          <button onClick={() => scrollHandler("left")}>
            <FaRegArrowAltCircleLeft />
          </button>
          <button onClick={() => scrollHandler("right")}>
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>
      <div
        className="displaysection"
        id="displaysec"
        onScroll={(e) => e.target.scrollLeft}
      >
        {images.map((ele) => {
          return (
            <div className="gallery" key={ele.item_img}>
              <img src={ele.item_img} alt={ele.item_img} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemDisplay;
