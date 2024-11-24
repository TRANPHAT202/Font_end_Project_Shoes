import React, { useRef, useState } from "react";
import "./Section.scss";
import { FaBoltLightning } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Section() {
  const [isFlastSale, setIsFlastSale] = useState(false);
  const [numberProcess, setNumberProcess] = useState(0);
  const refInput = useRef();

  const handleNumberRange = (event) => {
    setNumberProcess(event.target.value);
  };

  const handleOnMouseEnter = (src) => {
    refInput.current.src = src;
  };

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
              {isFlastSale ? (
                <div className="section_container_content__type_process">
                  <input
                    min={0}
                    max={100}
                    defaultValue={0}
                    type="range"
                    onChange={handleNumberRange}
                  />
                  <span>{numberProcess}</span>
                </div>
              ) : (
                ""
              )}

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
              ref={refInput}
              className="section_container_content__item-img-product"
            />
            <p className="section_container_content__item__title">
              Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính
            </p>
            <span className="section_container_content__item__price">
              250,000đ
            </span>
            <div className="section_container_content__item__type">
              <div
                className="section_container_content__item__type__type_item"
                onMouseEnter={() =>
                  handleOnMouseEnter(
                    "https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/09/13/z5826226535106_2746ebc648b62a93dd49d91350f8210f.jpg"
                  )
                }
              >
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_KEM.jpg"
                  alt="type"
                />
              </div>
              <div
                className="section_container_content__item__type__type_item"
                onMouseEnter={() =>
                  handleOnMouseEnter(
                    "https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/09/24/batch-z5862734441922-b443e2e9f7f1299015347441b91c1cfa1afbcdf9-06de-4985-a75b-642f4bb9c99d.jpg"
                  )
                }
              >
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=30&h=30&FileInput=/Resources/Color/2022/12/07/batch_DEN.jpg"
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
        <div className="section_container_content__view_all">
          <Link>Xem tất cả</Link>
        </div>
      </div>
    </div>
  );
}

export default Section;
