import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import SubMenu from "../SubMenu";

function Header() {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const handleOnMouseEnter = (event) => {
    setIsShowSubMenu(true);
  };
  const handleOnMouseLeave = () => {
    setIsShowSubMenu(false);
  };
  return (
    <header className="header">
      <Link to={"/"} className="header__left">
        <img src="https://mwc.com.vn/Assets/App/images/logo.png" alt="" />
      </Link>
      <div className="header__center">
        <ul>
          <li
            className={isShowSubMenu ? "header__center__list_subitem" : ""}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            Giá ưu đãi
            {isShowSubMenu ? (
              <SubMenu
                data={[
                  {
                    title: "79K",
                    href: "",
                  },
                  {
                    title: "99K - 109K",
                    href: "",
                  },
                  {
                    title: "109 - 149K",
                    href: "",
                  },
                ]}
              />
            ) : (
              ""
            )}
          </li>
          <li
            className={isShowSubMenu ? "header__center__list_subitem" : ""}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            Giày nữ
            {isShowSubMenu ? (
              <SubMenu
                data={[
                  {
                    title: "Giày cao gót",
                    href: "",
                  },
                  {
                    title: "Giày thể thao",
                    href: "",
                  },
                  {
                    title: "Dép sục",
                    href: "",
                  },
                ]}
              />
            ) : (
              ""
            )}
          </li>
          <li>Giày nam</li>
          <li>Giày cặp</li>
          <li>balo - túi</li>
          <li>sale 50%</li>
          <li>sản phẩm bán chạy</li>
          <li>phụ kiện</li>
        </ul>
      </div>
      <div className="header__right">
        <div className="header__right__item">
          <input type="text" placeholder="Tìm kiếm" />
          <CiSearch />
        </div>

        <Link to="/login">
          <CiUser className="header__right__icon" />
        </Link>
        <CiShoppingCart className="header__right__icon" />
      </div>
    </header>
  );
}

export default Header;
