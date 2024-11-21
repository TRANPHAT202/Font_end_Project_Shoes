import React, {useEffect} from "react";
import "./body.scss"
function Body(){
    useEffect(() =>{
        let x = 0
         document.querySelector(".section__next").addEventListener("click", () =>{ 
            x += 102
            console.log(x);
            
            if(x >= 306)
                x = 0
            document.querySelector(".body__content").style.transform = `translateX(-${x}%)`
         })
         document.querySelector(".section__prev").addEventListener("click", () =>{ 
            x -= 102
            document.querySelector(".body__content").style.transform = `translateX(-${x}%)`
         })
         setInterval(() => {
            x += 102
            if(x >= 306){
                x = 0
            }
           document.querySelector(".body__content").style.transform = `translateX(-${x}%)`
         }, 3000);
    })
    return(
        <>
        <div className="body">
            <div className="body__content">
                <img class = "body__content__img" 
                src="https://img.mwc.com.vn/giay-thoi-trang?w=1920&h=0&FileInput=/Resources/Silde/2024/10/25/banner-2.jpg" alt="" />
                <img class = "body__content__img" 
                src="https://img.mwc.com.vn/giay-thoi-trang?w=1920&h=0&FileInput=/Resources/Silde/2024/11/04/z5981481292145_6ef08c59d7f600522fd5b511651ba286.jpg" alt="" />
                <img class = "body__content__img" 
                src="https://img.mwc.com.vn/giay-thoi-trang?w=1920&h=0&FileInput=/Resources/Silde/2024/10/29/Thu%20year%20end.jpg" alt="" />
            </div>
            <div className="section">
                <button className="section__prev">PREV</button>
                <button className="section__next">NEXT</button>
            </div>
        </div>
        </>
    )
}
export default Body