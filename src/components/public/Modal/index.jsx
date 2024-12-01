import React from "react";
import "./Modal.scss";
import { IoClose, IoCloseCircleOutline  } from "react-icons/io5";
function Modal({ setIsShowCart }) {
  const handleCloseCart = () => {
    setIsShowCart(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation(); // Ngăn sự kiện lan ra ngoài modal
  };
  return (
    <div className="modal-container" onClick={handleCloseCart}>
      <div className="modal" onClick={handleModalClick}>
        <div className="modal__header">
          <h3>Giỏ hàng</h3>
          <IoClose onClick={handleCloseCart} />
        </div>
        <div className="modal__content">
          <div className="modal__content__list-item">
            <div className="modal__content__item">
              <div className="modal__content__item__left">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
                  alt="img_product"
                />
              </div>
              <div className="modal__content__item__right">
                <p>
                  Giày thể thao nữ MWC - 0623 Giày Sục Thể Thao Nữ Phối Họa Tiết
                  Siêu Cute,Sneaker Êm Chân Đế Bằng Hot Trend
                </p>
                <p>Kích cỡ: 35</p>
                <p>Màu sắc: kem</p>
                <p>
                  <span>1</span> x <strong>149.000₫</strong>
                </p>
              </div>
              <IoCloseCircleOutline className="modal__content__item__delete"/>
            </div>
            <div className="modal__content__item">
              <div className="modal__content__item__left">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
                  alt="img_product"
                />
              </div>
              <div className="modal__content__item__right">
                <p>
                  Giày thể thao nữ MWC - 0623 Giày Sục Thể Thao Nữ Phối Họa Tiết
                  Siêu Cute,Sneaker Êm Chân Đế Bằng Hot Trend
                </p>
                <p>Kích cỡ: 35</p>
                <p>Màu sắc: kem</p>
                <p>
                  <span>1</span> x <strong>149.000₫</strong>
                </p>
              </div>
              <IoCloseCircleOutline className="modal__content__item__delete"/>
            </div>
            <div className="modal__content__item">
              <div className="modal__content__item__left">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
                  alt="img_product"
                />
              </div>
              <div className="modal__content__item__right">
                <p>
                  Giày thể thao nữ MWC - 0623 Giày Sục Thể Thao Nữ Phối Họa Tiết
                  Siêu Cute,Sneaker Êm Chân Đế Bằng Hot Trend
                </p>
                <p>Kích cỡ: 35</p>
                <p>Màu sắc: kem</p>
                <p>
                  <span>1</span> x <strong>149.000₫</strong>
                </p>
              </div>
              <IoCloseCircleOutline className="modal__content__item__delete"/>
            </div>
            <div className="modal__content__item">
              <div className="modal__content__item__left">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
                  alt="img_product"
                />
              </div>
              <div className="modal__content__item__right">
                <p>
                  Giày thể thao nữ MWC - 0623 Giày Sục Thể Thao Nữ Phối Họa Tiết
                  Siêu Cute,Sneaker Êm Chân Đế Bằng Hot Trend
                </p>
                <p>Kích cỡ: 35</p>
                <p>Màu sắc: kem</p>
                <p>
                  <span>1</span> x <strong>149.000₫</strong>
                </p>
              </div>
              <IoCloseCircleOutline className="modal__content__item__delete"/>
            </div>
            <div className="modal__content__item">
              <div className="modal__content__item__left">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
                  alt="img_product"
                />
              </div>
              <div className="modal__content__item__right">
                <p>
                  Giày thể thao nữ MWC - 0623 Giày Sục Thể Thao Nữ Phối Họa Tiết
                  Siêu Cute,Sneaker Êm Chân Đế Bằng Hot Trend
                </p>
                <p>Kích cỡ: 35</p>
                <p>Màu sắc: kem</p>
                <p>
                  <span>1</span> x <strong>149.000₫</strong>
                </p>
              </div>
              <IoCloseCircleOutline className="modal__content__item__delete"/>
            </div>
            <div className="modal__content__item">
              <div className="modal__content__item__left">
                <img
                  src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
                  alt="img_product"
                />
              </div>
              <div className="modal__content__item__right">
                <p>
                  Giày thể thao nữ MWC - 0623 Giày Sục Thể Thao Nữ Phối Họa Tiết
                  Siêu Cute,Sneaker Êm Chân Đế Bằng Hot Trend
                </p>
                <p>Kích cỡ: 35</p>
                <p>Màu sắc: kem</p>
                <p>
                  <span>1</span> x <strong>149.000₫</strong>
                </p>
              </div>
              <IoCloseCircleOutline className="modal__content__item__delete"/>
            </div>
          </div>
          <div className="modal__content__bot">
            <div className="modal__content__bot__top">
              <p>Tạm tính: <strong>298.000₫</strong></p>
            </div>
            <div className="modal__content__bot__bot">
              <button>Xem giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
