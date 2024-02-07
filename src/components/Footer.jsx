import React from 'react';
import { Link } from 'react-router-dom';
import { FaRunning } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드럽게 스크롤되도록 함
        });
        };

    return (
        <footer className="cursor-default bg-black text-white w-full pb-2 mt-20">
            <section className="flex items-center flex-col lg:flex-row lg:justify-between m-auto justify-center 2xl:w-[1280px] xl:w-[1024px] w-11/12 pt-10">
                <Link to='/' onClick={scrollToTop} className='flex items-center text-6xl'>
                    <FaRunning />
                    <h1 className='ml-4'>NICE</h1>
                </Link>
                <ul className="flex font-normal gap-32 w-fit text-sm">
                    <li className="hidden lg:flex lg:flex-col lg:gap-2">
                        <div className="font-bold text-xl mb-4">고객센터</div>
                        <div>주문배송조회</div>
                        <div>반품 정책</div>
                        <div>결제 방법</div>
                        <div>공지사항</div>
                        <div>문의하기</div>
                    </li>
                    <li className="hidden lg:flex lg:flex-col lg:gap-2">
                        <div className="font-bold text-xl mb-4">회사소개</div>
                        <div>About Nike</div>
                        <div>소식</div>
                        <div>채용</div>
                        <div>투자자</div>
                        <div>지속가능성</div>
                    </li>
                    <li className="flex flex-row justify-center mt-10 lg:mt-0 lg:flex-col gap-2 lg:justify-normal">
                        <div className="font-bold text-xl mb-2">멤버가입</div>
                        <div className="font-bold text-xl mb-2">매장찾기</div>
                        <div className="font-bold text-xl mb-2">나이키 저널</div>
                    </li>
                </ul>
            </section>
            <section className="flex flex-col justify-center items-center mt-10 py-10 gap-6 border-t border-slate-600">
                <div className="flex flex-col items-center gap-6">
                    <div>Copyright 2024 hana All rights reserved</div>
                </div>
            </section>
        </footer>
    );
}

