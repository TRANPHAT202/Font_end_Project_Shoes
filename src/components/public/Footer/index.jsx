import React from "react";
import "./footer.scss";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { SiShopee } from "react-icons/si";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top__left footer__top__left--red">
          <h4>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</h4>
          <p>
            1900.633.349 <br />
            Tất cả các ngày trong tuần (Trừ tết Âm Lịch) <br />
            GÓP Ý & KHIẾU NẠI (08:30 - 20:30) <br />
            1900.633.349 <br />
            Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
          </p>
          <br />
        </div>
        <div className="footer__top__center footer__top__center--yellow">
          <ul>
            Thông tin
            <li> Website thương mại điện tử</li>
            <li> Giới thiệu về MWC</li>
            <li>Than Phiền Góp Ý</li>
            <li>Chính sách và quy định</li>
          </ul>
        </div>
        <div className="footer__top__right footer__top__right--green">
          <ul>
            FAQ
            <li>Vận chuyển</li>
            <li>Chính sách đổi trả</li>
            <li> Chính sách đổi trả bảo hành</li>
            <li className="footer__top__right__icon">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <SiShopee />
              <FaTiktok />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__mid">
        <div className="footer__mid__title">
          <h3>HỆ THỐNG CỬA HÀNG</h3>
        </div>
        <div className="footer__mid__center">
          <ul>
            KHU VỰC TPHCM
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              414-416 Nguyễn Trãi, P.8, Q5.
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              96 Nguyễn Trãi, P3, Q5
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              214 Nguyễn Trãi, P.Nguyễn Cư Trinh, Q1
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              126 Hậu Giang, P.6, Q6
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              124 Nguyễn Thị Thập, P.Bình Thuận, Q7
            </li>
          </ul>
          <ul>
            TÂY NAM BỘ
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />
              224 Trần Hưng Đạo, Q.Ninh Kiều,Cần Thơ.{" "}
              <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                Xem bản đồ
              </a>
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              41G Mậu Thân, Q.Ninh Kiều, Cần Thơ.
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              538 Đường 91, P.Thốt Nốt, Quận Thốt Nốt,Cần Thơ
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              131 Đường 26 Tháng 3, Châu Văn Liêm, Ô Môn, Cần Thơ.
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              53A5 Phạm Thái Bường , P.4,Vĩnh Long( đối diện Đài Truyền Hình
              Vĩnh Long )
            </li>
          </ul>
          <ul>
            ĐÔNG NAM BỘ
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              229a Yersin, P.Phú Cường,TP.Thủ Dầu 1,Bình Dương.
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              96 Nguyễn Văn Tiết, P.Lái Thiêu, TX.Thuận An,Bình Dương.{" "}
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              124 Nguyễn An Ninh, Khu Phố Bình Minh 2, Phường Dĩ An, TP Dĩ An
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              40 Hùng Vương, phường Mỹ Phước, Bến Cát, Bình Dương.
            </li>
            <li>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                alt="map"
              />{" "}
              1243 Phạm Văn Thuận, P.Thống Nhất, Biên Hòa, Đồng Nai
            </li>
          </ul>
        </div>
        <div className="footer__mid__bot"></div>
      </div>
      <div className="footer__bot"></div>
    </footer>
  );
}

export default Footer;
