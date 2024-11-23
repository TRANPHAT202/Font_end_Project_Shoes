import React, { useState } from "react";
import "./Section.scss";
import { FaBoltLightning } from "react-icons/fa6";
function Section() {
  const [isFlastSale, setIsFlastSale] = useState(true);
  return (
    <div className="section_container">
      <div className="section_container_top">
        {isFlastSale ? (
          <div className="section_container_top__flast-sale">
            <strong>
              F<FaBoltLightning />
              ASH
            </strong>
            <span> SALE</span>
          </div>
        ) : (
          <h3>Sản Phẩm Bán Chạy</h3>
        )}
      </div>
      <div className="section_container_content">
        <div className="section_container_content__list-item">
          <div className="section_container_content__item">
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/11/20/z6049942134068_18729697cfba6413c3908ecf5dfb6cba.jpg"
              alt="img_product"
              className="section_container_content__item-img-product"
            />
            <p className="section_container_content__item__title">
              Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính
            </p>
            <span className="section_container_content__item__price">
              250,000đ
            </span>
            <div className="section_container_content__item__type">
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
            </div>
            {isFlastSale && (
              <div className="section_container_content__item__discount">
                <p>37%</p>
                <p>Giảm</p>
              </div>
            )}
          </div>
          <div className="section_container_content__item">
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/11/20/z6049942134068_18729697cfba6413c3908ecf5dfb6cba.jpg"
              alt="img_product"
              className="section_container_content__item-img-product"
            />
            <p className="section_container_content__item__title">
              Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính
            </p>
            <span className="section_container_content__item__price">
              250,000đ
            </span>
            <div className="section_container_content__item__type">
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
            </div>
          </div>
          <div className="section_container_content__item">
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/11/20/z6049942134068_18729697cfba6413c3908ecf5dfb6cba.jpg"
              alt="img_product"
              className="section_container_content__item-img-product"
            />
            <p className="section_container_content__item__title">
              Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính
            </p>
            <span className="section_container_content__item__price">
              250,000đ
            </span>
            <div className="section_container_content__item__type">
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
            </div>
          </div>
          <div className="section_container_content__item">
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/11/20/z6049942134068_18729697cfba6413c3908ecf5dfb6cba.jpg"
              alt="img_product"
              className="section_container_content__item-img-product"
            />
            <p className="section_container_content__item__title">
              Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính
            </p>
            <span className="section_container_content__item__price">
              250,000đ
            </span>
            <div className="section_container_content__item__type">
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
            </div>
          </div>
          <div className="section_container_content__item">
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/11/20/z6049942134068_18729697cfba6413c3908ecf5dfb6cba.jpg"
              alt="img_product"
              className="section_container_content__item-img-product"
            />
            <p className="section_container_content__item__title">
              Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính
            </p>
            <span className="section_container_content__item__price">
              250,000đ
            </span>
            <div className="section_container_content__item__type">
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
              <div className="section_container_content__item__type__type_item">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
