import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import Property from "./Property";
import style from "./PropertysStyle.module.css";

const Propertys = () => {
  const [data, setData] = useState([]);
  const [formData, setformData] = useState({});
  const [filterData, setFilterData] = useState();

  const getData = () => {
    fetch("https://mock-3-json.herokuapp.com/property")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setData(res);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    //console.log(data)
    let arr1 = data.filter(function (e) {
      return e.location === formData.location;
    });
    console.log(arr1);
    if (formData.location) {
      setFilterData(arr1);
    }

    let arr2 = arr1.filter(function (e) {
      return e.PropertyType === formData.PropertyType;
    });
    console.log(arr2);

    if (formData.PropertyType) {
      setFilterData(arr2);
    }

    let arr3 = [];

    for (let i = 0; i < arr2.length; i++) {
      console.log(arr2[i].rent,formData.MinPropertyRange,formData.MaxPropertyRange)
      if (Number(arr2[i].rent) >= Number(formData.MinPropertyRange) && Number(arr2[i].rent) < Number(formData.MaxPropertyRange)) {
        arr3.push(arr2[i])

      }
    }

    if (formData.MinPropertyRange && formData.MaxPropertyRange) {
      setFilterData(arr3);
    }

   
   
    const date = new Date(formData.date);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
   //  console.log(unixTimestamp);

   let arr4=[]
    for(let k=0;k<arr3.length;k++){
     const date1=new Date(data[k].MoveInData)
     let unixTimestamp1 = Math.floor(date1.getTime() / 1000);
       //  console.log(unixTimestamp,unixTimestamp1);
        if(unixTimestamp1>=unixTimestamp){
         arr4.push(data[k])
          console.log(arr4)
        }
     }
     if(formData.date){
       setFilterData(arr4)
     }

    setformData({});
  };
  return (
    <div className={style.Box}>
      <div className={style.BoxTitle}>
        <h1>
          Find Your <span>Best Property.????</span>
        </h1>
        <p>Esteem spirit temper too say adieus who direct esteem.</p>
      </div>
      <div className={style.FilterBox}>
        <div>
          <p>Location</p>{" "}
          <select
            onChange={handleChange}
            name="location"
            placeholder="City"
            className={style.solid}
          >
            <option value="">City</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Thane">Thane</option>
            <option value="Nasik">Nasik</option>
          </select>
        </div>
        <div>
          <p>Move In Date</p>
          <input
            type="date"
            name="date"
            value={formData.date || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Rent</p>
          <div style={{ display: "flex" }}>
            <select
              placeholder="Property-range"
              onChange={handleChange}
              style={{ marginRight: "5px" }}
              name="MinPropertyRange"
            >
              {" "}
              <option value="">Min Range</option>
              <option value="3000">3000</option>
              <option value="5000">5000</option>
              <option value="10000">10000</option>
              <option value="15000">15000</option>
              <option value="20000">20000</option>
            </select>
            <select
              placeholder="Property-range"
              onChange={handleChange}
              name="MaxPropertyRange"
            >
              {" "}
              <option value="">Max Range</option>
              <option value="5000">5000</option>
              <option value="10000">10000</option>
              <option value="15000">15000</option>
              <option value="20000">20000</option>
              <option value="50000">50000</option>
            </select>
          </div>
        </div>


        
        <div>
          <p>Property Type</p>{" "}
          <select
            placeholder="Property-type"
            onChange={handleChange}
            name="PropertyType"
          >
            <option value="">Property Type</option>
            <option value="Housing">Housing</option>
            <option value="Commercial">Commercial</option>
            <option value="Condos">Condos</option>
            <option value="TownHomes">Town Homes</option>
          </select>
        </div>

        <div>
          <button type="submit" onClick={handleSubmit}>
            {" "}
            Search
          </button>
        </div>
      </div>

      <div className={style.CardBox}>
        {filterData
          ? filterData.map((elem) => {
              return <Property data={elem} key={elem.id} />;
            })
          : data.map((elem) => {
              return <Property data={elem} key={elem.id} />;
            })
            }
      </div>
    </div>
  );
};

export default Propertys;
