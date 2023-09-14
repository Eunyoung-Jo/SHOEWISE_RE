import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Link와 useNavigate 추가
import "./Login.css";

function Login() {
    const navigate = useNavigate(); // useNavigate 훅 사용

    useEffect(() => {
        // 카카오와 네이버 SDK 초기화 코드를 여기에 작성합니다 (필요한 경우).
    }, []);

    const kakaoLogin = () => {
        // 카카오 로그인 처리 로직을 여기에 구현합니다.
    };

    const kakaoLogout = () => {
        // 카카오 로그아웃 처리 로직을 여기에 구현합니다.
    };

    const naverLogout = () => {
        // 네이버 로그아웃 처리 로직을 여기에 구현합니다.
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <img src="logo.png" alt="SHOEWISE 로고" className="logo" />
            </header>
            <ul>
                <li onClick={kakaoLogin}>
                    <a href="javascript:void(0)">
                        <span>카카오 로그인</span>
                    </a>
                </li>
                <li onClick={kakaoLogout}>
                    <a href="javascript:void(0)">
                        <span>카카오 로그아웃</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a id="naverIdLogin_loginButton" href="javascript:void(0)">
                        <span>네이버 로그인</span>
                    </a>
                </li>
                <li onClick={naverLogout}>
                    <a href="javascript:void(0)">
                        <span>네이버 로그아웃</span>
                    </a>
                </li>
            </ul>
            <Link to="/" className="button"> {/* 이 부분 수정 */}
                홈으로
            </Link>
        </div>
    );
}

export default Login;
