import React from "react";
import "./SubMenu.scss";
import { Link } from "react-router-dom";

function SubMenu({ data }) {
  return (
    <ul className="header__center__subItem">
      {(data || []).map((item) => (
        <li className="header__center__subItem__item">
          <Link>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
