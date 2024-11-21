import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss"
import { CiSearch,CiUser,CiShoppingCart } from "react-icons/ci";
 function Header() {
  return (
    <header className='header'>
      <div className='header__left'>
        <img src="https://mwc.com.vn/Assets/App/images/logo.png" alt="" />
      </div>
      <div className='header__center'>
        <ul>
          <li>Gía ưu đãi</li>
          <li>Giày nữ</li>
          <li>Giày nam</li>
          <li>Giày cặp</li>
          <li>balo - túi</li>
          <li>sale 50%</li>
          <li>sản phẩm bán chạy</li>
          <li>phụ kiện</li>
        </ul>
      </div>
      <div className='header__right'>
        <div className='header__right__item'>
          <input type="text" placeholder='Tìm kiếm' /><CiSearch />
        </div>
        <Link to = "/login">
        <CiUser className='header__right__icon'/>
        </Link>
        <CiShoppingCart className='header__right__icon'/>
      </div>
    </header>
  )
}

export default Header;