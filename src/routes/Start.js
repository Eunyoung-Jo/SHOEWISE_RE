import { useEffect, useState } from "react"
import "./Start.css";

function Start() {

    return (
        <div className="container">
            <header>
                <img src="logo.png" alt="SHOEWISE 로고" className="logo" />
            </header>

            <div>
                <h1>SHOEWISE</h1>
                <p>슈와이즈로 리뷰를 확인하고, 발에 딱 맞는 신발을 찾아보세요</p>
            </div>
        </div>
    );
}




export default Start;