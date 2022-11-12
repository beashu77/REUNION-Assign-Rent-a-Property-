import React from "react";
import style from "./PropertysStyle.module.css";
const Property = ({ data }) => {
  console.log(data)
  return (
    <div className={style.SingleCardBox}>
      <img src={data.img} className={style.PropertyImg} />
      <div className={style.SingleCardBoxBottom}>
        <div className={style.SingleCardBoxBottom1}>
          <h3>{data.rent}/month</h3>
         
        </div>
        <div className={style.SingleCardBoxBottom2}><h3>{data.title}</h3>
        <p style={{fontSize:'12px'}}>{data.address}</p>
        </div>
        <div className={style.SingleCardBoxBottom3}>
       
          <div>{data.location}</div>
          <div>{data.bathroom}</div>
          <div>{data.area}</div>
          <div>{data.PropertyType}</div>
        </div>
      </div>
    </div>
  );
};

export default Property;
