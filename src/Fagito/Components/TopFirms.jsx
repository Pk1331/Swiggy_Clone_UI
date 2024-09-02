import React, { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { MagnifyingGlass } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import { API_URl } from "../API_Integration/data";
const TopFirms = () => {
  const [vendordata, setvendordata] = useState({ vendors: [] });
  const [loading, setloading] = useState(true);

  const vendorFirmHandler = async () => {
    try {
      const res = await fetch(`${API_URl}/vendor/all-vendors`);
      const data = await res.json();
      setvendordata(data);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(true);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const scrollHandler = (direction) => {
    const chainitem = document.getElementById("chainsec");
    const scrollamt = 550;
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
      {loading && (
        <div className="Loader">
          <div className="loadingName">Your 🥗 is Loading...</div>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      )}
      <div className="titleAndbtn">
        <h2 className="chainname">Top restaurant chains in Machilipatnam</h2>
        <div className="Btngrp">
          <button onClick={() => scrollHandler("left")}>
            <FaRegArrowAltCircleLeft />
          </button>
          <button onClick={() => scrollHandler("right")}>
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>
      <section
        className="topfirmSec"
        id="chainsec"
        onScroll={(event) => event.target.scrollLeft}
      >
        {vendordata.vendors.length > 0 ? (
          vendordata.vendors.map((vendor) => {
            return (
              <div className="vendorBox" key={vendor._id}>
                {vendor.firm.map((item, firmIndex) => {
                  return (
                    <Link
                      to={`/products/${item._id}/${item.Restaurant_Name}`}
                      className="link"
                    >
                      <div className="firmImage" key={item._id}>
                        <img
                          src={`${API_URl}/uploads/${item.Restaurant_image}`}
                        />
                      </div>
                      <div key={firmIndex} className="firmname">
                        <strong>{item.Restaurant_Name}</strong>
                      </div>
                    </Link>
                  );
                })}
              </div>
            );
          })
        ) : (
          <div>No vendors available</div>
        )}
      </section>
    </>
  );
};

export default TopFirms;
