import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import "./Home.scss";
import Header from "../Header";
import Footer from "../Footer";
function Home() {
  const [isShowBackToTop, setIsShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let curr = window.scrollY;
      if (curr >= 400) {
        setIsShowBackToTop(true);
      } else {
        setIsShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackTop = () => {
    window.scrollTo({
      top: 0, // Vị trí đích là đầu trang (tọa độ Y = 0)
      behavior: "smooth", // Cuộn mượt mà
    });
  };
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <div className="hotline-phone-ring-wrap">
        <div className="hotline-phone-ring">
          <div className="hotline-phone-ring-circle"></div>
          <div className="hotline-phone-ring-circle-fill"></div>
          <div className="hotline-phone-ring-img-circle">
            <Link to={"tell:0585976890"}>
              <img
                src="https://mwc.com.vn/Assets/App/images/icon-2.png"
                alt="Số điện thoại"
                width="50"
              />
            </Link>
          </div>
        </div>
      </div>
      {isShowBackToTop ? (
        <div className="bttop" onClick={handleBackTop}>
          <FaArrowUp size={24} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
