import React from "react";
import "./Login.scss";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content__login">
          <h1 className="container__content__login--title">Đăng nhập</h1>
          <div className="container__content__login--from_option">
            <label htmlFor="">
              Tên đăng nhập <span>*</span>
            </label>
            <input type="text" placeholder="Nhập vào tên đăng nhập" />
            <label htmlFor="">
              Mật khẩu <span>*</span>
            </label>
            <input type="text" placeholder="Nhập vào mật khẩu" />
            <div className="container__content__login--from_option_itemlogin">
              <button>Đăng Nhập</button>
              <Link to="">Quên mật khẩu?</Link>
            </div>
          </div>
          <div className="social-network-content">
            <div className="social-network-content-line-left"></div>
            <span className="social-network-content-title">Hoặc</span>
            <div className="social-network-content-line-right"></div>
          </div>
          <div className="container__content__login--from_option_buttonItem">
            <button className="buttom_item1">
              {" "}
              <FaFacebook />
              Facebook
            </button>
            <button className="buttom_item1">
              {" "}
              <FaGoogle />
              Google
            </button>
          </div>
            <p>
              Nếu Quý khách có vấn đề gì thắc mắc hoặc cần hỗ trợ gì thêm có thể
              liên hệ:
            </p>
            <p>Hotline: 1900.633.349 hoặc inbox Facebook</p>
        </div>
      </div>
      <div className="container_content_section">
        <div className="container_content_section_left">
        </div>
        <div className="container_content_section_center">
          <span>Or</span>
        </div>
        <div className="container_content_section_right">
        </div>
      </div>
      <div className="container__content__register">
        <h1 className="container__content__register--title">Đăng ký</h1>
        <div className="container__content__register--form">
          <div className="container__content__register--from_option">
            <label htmlFor="">
              Tên đăng nhập <span>*</span>
            </label>
            <input type="text" placeholder="Nhập vào tên đăng nhập" />
            <label htmlFor="">
              Số điện thoại <span>*</span>
            </label>
            <input type="text" placeholder="Nhập vào số điện thoại" />
            <label htmlFor="">
              Mật khẩu <span>*</span>
            </label>
            <input type="text" placeholder="Nhập vào mật khảu" />
            <label htmlFor="">
              Nhắc lại mật khẩu <span>*</span>
            </label>
            <input type="text" placeholder="Nhập lại mật khẩu" />
          </div>
          <button>Đăng ký</button>
          <p>Thông tin cá nhân của bạn sẽ được dùng để điền vào hóa đơn, giúp bạn thanh toán nhanh chóng và dễ dàng</p>
        </div>
      </div>
    </div>
  );
}
