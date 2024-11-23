import React from "react";
import "./footer.scss";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { SiShopee } from "react-icons/si";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top__left footer__top__left--red">
          <h4>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</h4>
          <strong>1900.633.349</strong>
          <p>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
          <p> GÓP Ý & KHIẾU NẠI (08:30 - 20:30)</p>
          <strong>1900.633.349</strong>
          <p>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
        </div>

        <div className="footer__top__center footer__top__center--yellow">
          <ul>
            Thông tin
            <li>
              <FaAngleRight /> Website thương mại điện tử
            </li>
            <li>
              <FaAngleRight /> Giới thiệu về MWC
            </li>
            <li>
              <FaAngleRight />
              Than Phiền Góp Ý
            </li>
            <li>
              <FaAngleRight />
              Chính sách và quy định
            </li>
          </ul>
        </div>
        <div className="footer__top__right footer__top__right--green">
          <ul>
            FAQ
            <li>
              <FaAngleRight /> Vận chuyển
            </li>
            <li>
              <FaAngleRight />
              Chính sách đổi trả
            </li>
            <li>
              <FaAngleRight /> Chính sách đổi trả bảo hành
            </li>
            <li className="footer__top__right__icon">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <SiShopee color="#ec2a23" />
              <FaTiktok />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__mid">
          <div className="footer__mid__title">
            <h3>HỆ THỐNG CỬA HÀNG</h3>
            <p>Xem địa chỉ các cửa hàng</p>
          </div>
          <div className="footer__mid__center">
            <div className="footer__mid__center__left">
              <h4 className="footer__mid__center__left__title">
                KHU VỰC TPHCM
              </h4>
              <ul className="footer__mid__center__left__list-item">
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__mid__center__mid">
              <h4 className="footer__mid__center___mid__title">TÂY NAM BỘ</h4>
              <ul className="footer__mid__center__left__list-item">
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__mid__center__right">
              <h4 className="footer__mid__center___right__title">
                ĐÔNG NAM BỘ
              </h4>
              <ul className="footer__mid__center__left__list-item">
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
                <li className="footer__mid__center__left__item">
                  <img
                    src="https://mwc.com.vn/Assets/App/images/icon_map.png"
                    alt="map"
                  />
                  <p>414-416 Nguyễn Trãi, P.8, Q5.</p>
                  <a href="https://www.google.com/maps/?q=10.034526056292506,105.77513469451726">
                    Xem bản đồ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bot">
          <div className="footer__bot__left">
            <p>SHOP GIÀY MWC</p>
            <p>
              Địa chỉ: VP: 214/14 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Tp Hồ Chí
              Minh
            </p>
            <p>MST: 231232123312</p>
          </div>
          <div className="footer__bot__right">
            <img
              src="https://www.mwc.com.vn/Assets/App/images/general/bocongthuong.png"
              alt="bocongthuong.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
