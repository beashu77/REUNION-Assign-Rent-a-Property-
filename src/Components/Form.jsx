import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setformData] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    fetch('https://mock-3-json.herokuapp.com/property',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
    }).then((res)=>res.json())
    .then((res)=>console.log(res))
  };

  return (
    <div>
      <from>
     
        <input
          onChange={handleChange}
          name="rent"
          value={formData.rent || ""}
          type="number"
          placeholder="rent"
        />
         <select
          onChange={handleChange}
          name="location"
          placeholder="City"
        >
          <option value="">State</option> 
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Thane">Thane</option>
          <option value="Nasik">Nasik</option>
        </select>
        <input
          onChange={handleChange}
          name="img"
          value={formData.img || ""}
          type="url"
          placeholder="img"
        />
        <input
          onChange={handleChange}
          name="title"
          value={formData.title || ""}
          type="text"
          placeholder="title"
        />
        <input
          onChange={handleChange}
          name="address"
          value={formData.address || ""}
          type="text"
          placeholder="address"
        />
        <input
          onChange={handleChange}
          name="bed"
          value={formData.bed || ""}
          type="number"
          placeholder="bed"
        />
        <input
          onChange={handleChange}
          name="bathroom"
          value={formData.bathroom || ""}
          type="number"
          placeholder="bathroom"
        />
        <input
          onChange={handleChange}
          name="area"
          value={formData.area || ""}
          type="text"
          placeholder="area"
        />
        <input
          onChange={handleChange}
          name="MoveInData"
          value={formData.MoveInData || ""}
          type="date"
          placeholder="MoveInData"
        />
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </from>
    </div>
  );
};

export default Form;

