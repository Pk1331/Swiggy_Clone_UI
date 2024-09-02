import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URl } from "../API_Integration/data";

const FirmsChain = () => {
  const [firmdata, setfirmdata] = useState([]);
  const [filter, setFilter] = useState("All");
  const [activebtn,setactivebtn]=useState("all")

  const filterHandler = (region,cat) => {
    setFilter(region);
    setactivebtn(cat)
  };

  const firmHandler = async () => {
    try {
      const res = await fetch(`${API_URl}/vendor/all-vendors`);
      const data = await res.json();
      setfirmdata(data.vendors);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    firmHandler();
  }, []);

  const filteredData = firmdata.map((mtm) => ({
    ...mtm,
    firm: mtm.firm.filter((item) =>
      filter === "All" || item.Region.includes(filter)
    ),
  })).filter((mtm) => mtm.firm.length > 0);

  return (
    <>
      <h2 className="mtmname">Restaurants with online food delivery in Machilipatnam</h2>
      <div className="filterbtn">
        <button onClick={() => filterHandler("All","all")} className={activebtn==="all" ? 'activebutton':""}>All</button>
        <button onClick={() => filterHandler("South-Indian","south")}className={activebtn==="south" ? 'activebutton':""} >South Indian</button>
        <button onClick={() => filterHandler("North-Indian","north")}className={activebtn==="north" ? 'activebutton':""}>North Indian</button>
        <button onClick={() => filterHandler("Chinese","chainese")}className={activebtn==="chainese" ? 'activebutton':""}>Chinese</button>
        <button onClick={() => filterHandler("Bakery","cake")}className={activebtn==="cake" ? 'activebutton':""}>Bakery</button>
      </div>
      <section className="firmSection">
        {filteredData.length > 0 ? (
          filteredData.map((mtm, index) => (
            <div className="FirmBox" key={index}>
              {mtm.firm.map((item) => {
                const region = Array.isArray(item.Region)
                  ? item.Region.join(" ").replace(/([a-z])([A-Z])/g, "$1 $2")
                  : "Unknown Region";
                return (
                  <Link to={`/products/${item._id}/${item.Restaurant_Name}`} className="link" key={item._id}>
                    <div className="firmGroup">
                      <div className="firmChain" key={item.Restaurant_Name}>
                        <img
                          src={`${API_URl}/uploads/${item.Restaurant_image}`}
                          alt={item.Restaurant_Name}
                        />
                        <div className="firmOffer">{item.Offer}</div>
                      </div>
                      <div className="firmDetails">
                        <strong className="Name">{item.Restaurant_Name}</strong>
                        <br />
                        <div className="field">{region}</div>
                        <div className="field">{item.Area}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))
        ) : (
          <div>No vendors available</div>
        )}
      </section>
    </>
  );
};

export default FirmsChain;
