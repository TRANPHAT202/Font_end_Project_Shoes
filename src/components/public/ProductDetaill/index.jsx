import React from "react";
import "./ProductDetail.scss";
import { MdStarBorder } from "react-icons/md";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
function ProductDetail() {
  return (
    <div className="container__productDetail">
      <div className="container__productDetail__content">
        <div className="container__productDetail__content__left">
          <div className="container__productDetail__content__left__video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NRjEDk9x-ms?si=rTlurLihHkGMeods"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="container__productDetail__content__left__preview_image_product">
            <div className="container__productDetail__content__left__preview_image_product__view">
              <img
                src="https://img.mwc.com.vn/giay-thoi-trang?w=1150&h=0&FileInput=/Resources/Product/2023/12/13/z4969606609796_01954976610a4922df94d84d8e512753.jpg"
                alt=""
              />
              <div className="container__productDetail__content__left__preview_image_product__view__option">
                <FaCircleChevronLeft />
                <FaCircleChevronRight />
              </div>
            </div>
            <div className="container__productDetail__content__left__preview_image_product__list-image">
              <div className="container__productDetail__content__left__preview_image_product__item_image">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=1150&h=0&FileInput=/Resources/Product/2023/12/13/z4969606609796_01954976610a4922df94d84d8e512753.jpg"
                  alt=""
                />
              </div>
              <div className="container__productDetail__content__left__preview_image_product__item_image">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=1150&h=0&FileInput=/Resources/Product/2023/12/13/z4969606609796_01954976610a4922df94d84d8e512753.jpg"
                  alt=""
                />
              </div>
              <div className="container__productDetail__content__left__preview_image_product__item_image">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=1150&h=0&FileInput=/Resources/Product/2023/12/13/z4969606609796_01954976610a4922df94d84d8e512753.jpg"
                  alt=""
                />
              </div>
              <div className="container__productDetail__content__left__preview_image_product__item_image">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=1150&h=0&FileInput=/Resources/Product/2023/12/13/z4969606609796_01954976610a4922df94d84d8e512753.jpg"
                  alt=""
                />
              </div>
              <div className="container__productDetail__content__left__preview_image_product__item_image">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=1150&h=0&FileInput=/Resources/Product/2023/12/13/z4969606609796_01954976610a4922df94d84d8e512753.jpg"
                  alt=""
                />
              </div>

              <div className="container__productDetail__content__left__preview_image_product__list-image__option">
                <FaCircleChevronLeft />
                <FaCircleChevronRight />
              </div>
            </div>
          </div>
        </div>
        <div className="container__productDetail__content__reight">
          <h1 className="container__productDetail__content__reight__title">
            Giày Thể Thao Nữ MWC 0507 - Giày Thể Thao Nữ Dáng Sneaker Siêu Êm
            Chân, Giày Đế Cao 4cm Năng Động, Trẻ Trung, Thời Trang.
          </h1>
          <div className="container__productDetail__content__reight__review">
            <div className="container__productDetail__content__reight__star">
              <MdStarBorder color="#ff0000" />
              <MdStarBorder color="#ff0000" />
              <MdStarBorder color="#ff0000" />
              <MdStarBorder color="#ff0000" />
              <MdStarBorder />
            </div>
            <div className="container__productDetail__content__reight__feedback">
              <strong>1014</strong>
              <span>Đánh giá</span>
            </div>
            <div className="container__productDetail__content__reight__favorite">
              <strong>890</strong>
              <span>Số lượng thích</span>
            </div>
          </div>
          <div className="container__productDetail__content__reight__price">
            <span className="container__productDetail__content__reight__price__old">
              295.000đ
            </span>
            <span className="container__productDetail__content__reight__price__new">
              149.000đ
            </span>
          </div>
          <strong className="container__productDetail__content__reight__code">
            SALE THỂ THAO 149K
          </strong>

          <div className="container__productDetail__content__reight__colors">
            <label className="container__productDetail__content__reight__colors__label">
              Màu
            </label>
            <div className="container__productDetail__content__reight__colors__list_item">
              <div className="container__productDetail__content__reight__colors__item"></div>
              <div className="container__productDetail__content__reight__colors__item"></div>
              <div className="container__productDetail__content__reight__colors__item"></div>
            </div>
          </div>

          <div className="container__productDetail__content__reight__size">
            <label className="container__productDetail__content__reight__size__title">
              Kích thước
            </label>
            <div className="container__productDetail__content__reight__size__list-item">
              <div className="container__productDetail__content__reight__size__item">
                <span>35</span>
              </div>
              <div className="container__productDetail__content__reight__size__item">
                <span>36</span>
              </div>
              <div className="container__productDetail__content__reight__size__item">
                <span>37</span>
              </div>
            </div>
          </div>
          <strong className="container__productDetail__content__reight__training_size">
            Hướng dẫn tính Size
          </strong>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
