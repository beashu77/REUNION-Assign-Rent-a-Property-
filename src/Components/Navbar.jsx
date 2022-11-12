import React from "react";
import style from "./PropertysStyle.module.css";

const Navbar = () => {
  return (
    <div className={style.NavbarConatiner}>
      <div>
        <h3>
          <span>Real</span>Estate.
        </h3>
      </div>
      <div className={style.list}>
        <li>Housing</li>
        <li>Commercial</li>
        <li>TownHomes</li>
        <li>Condos</li>
      </div>
<div className={style.select}>
      <select>
        <option>Property Type </option>
        <option>Housing</option>
        <option>Commercial</option>
        <option>TownHomes</option>
        <option>Condos</option>
      </select></div>
      <div>
        <button>Add Property</button>
      </div>
    </div>
  );
};

export default Navbar;
