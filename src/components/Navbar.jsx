import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRunning } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드럽게 스크롤되도록 함
    });
  };

  const toggleNav = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };

  return (
    <>
    {!isMobile && (
          <>
            {user && 
              <div className='flex justify-end py-2 px-10 w-full bg-[#f5f5f5]'>
                  <User user={user} />
                  <button className='bg-black text-white py-2 px-4 rounded-full hover:brightness-110' onClick={logout} >Logout</button>
              </div>
            }
          </>
        )
      }
      <header className={`bg-white flex py-3 px-3 md:px-10 w-full justify-between ${isScrolled ? 'fixed top-0 z-50' : 'relative'}`}>
        <Link to='/' onClick={scrollToTop} className='flex items-center text-3xl'>
          <FaRunning />
          <h1>NICE</h1>
        </Link>
        {isMobile ? (
          <>
            <div className='absolute right-3 md:right-10 top-1/2 transform -translate-y-1/2 z-50'>
              <div className='flex items-center gap-6'>
                  {user && user.isAdmin && (
                    <Link to='/products/new' className='transition ease-in-out delay-100 hover:text-lime-600 text-xl'>
                      <BsFillPencilFill />
                    </Link>
                  )}
                  {user && (
                    <Link to='/carts' className='transition ease-in-out delay-100 hover:text-lime-600'>
                      <CartStatus />
                    </Link>
                  )}
                <button className={showNav ? 'text-4xl w-8 h-8 hover:bg-slate-300 rounded-full flex items-center justify-center':'text-3xl'} onClick={toggleNav}>
                  {showNav ? <IoCloseOutline /> : <RxHamburgerMenu />}
                </button>
              </div>
            </div>
              <div className={`absolute w-full top-0 left-0 bg-white z-40 overflow-hidden transition-transform duration-300 ${showNav ? 'h-screen transform translate-y-0' : 'h-0 transform -translate-y-full'}`}>
                <nav className="pt-[150px] flex flex-col items-center text-3xl font-bold gap-y-20">
                  <Link to='/products' 
                    onClick={() => { 
                      toggleNav(); // 네비게이션 메뉴 토글
                      scrollToTop(); // 페이지 상단으로 스크롤
                    }}  
                    className='transition ease-in-out delay-100 hover:text-lime-600'
                    >Products
                  </Link>
                  <Link to='/products/men' 
                    onClick={() => { 
                      toggleNav(); // 네비게이션 메뉴 토글
                      scrollToTop(); // 페이지 상단으로 스크롤
                    }} 
                    className='transition ease-in-out delay-100 hover:text-lime-600'
                    >Men
                  </Link>
                  <Link to='/products/women' 
                    onClick={() => { 
                      toggleNav(); // 네비게이션 메뉴 토글
                      scrollToTop(); // 페이지 상단으로 스크롤
                    }} 
                    className='transition ease-in-out delay-100 hover:text-lime-600'
                    >Women
                  </Link>
                </nav>
                <div className={`mt-20 flex items-center justify-center gap-4 py-4 ${user ? 'border-y border-slate-200' :''}`}>
                  {!user && 
                    <button className="text-lg py-3 px-20 bg-black text-white rounded-full" onClick={login}>Sign in</button>
                  }
                  {user && (
                    <div className='flex items-center'>
                      <User user={user} />
                      <button className='bg-black text-white py-2 px-4 rounded-full hover:brightness-110' onClick={logout} >Logout</button>
                    </div>
                  )}
                </div>
              </div>
          </>
        ) : (
          <>
            <nav className='flex items-center gap-14 font-semibold text-lg'>
              <Link to='/products'      
                onClick={() => { 
                  scrollToTop(); // 페이지 상단으로 스크롤
                }} 
                className='transition ease-in-out delay-100 hover:text-lime-600'
              >Products
              </Link>
              <Link to='/products/men'  
                onClick={() => { 
                  scrollToTop(); // 페이지 상단으로 스크롤
                }} 
                className='transition ease-in-out delay-100 hover:text-lime-600'
              >Men
              </Link>
              <Link to='/products/women'  
                onClick={() => { 
                  scrollToTop(); // 페이지 상단으로 스크롤
                }} 
                className='transition ease-in-out delay-100 hover:text-lime-600'
                >Women
              </Link>
            </nav>
            <div className='flex items-center gap-4'>
            {!user && 
              <button className="text-lg p-2 px-4 hover:bg-black hover:text-white rounded-full border hover:border-transparent" onClick={login}>Sign in</button>
            }
            {user && user.isAdmin && !isMobile && (
              <Link to='/products/new' className='transition ease-in-out delay-100 hover:text-lime-600 text-xl'>
                <BsFillPencilFill />
              </Link>
            )}
            {user && (
              <Link to='/carts' className='transition ease-in-out delay-100 hover:text-lime-600'>
                <CartStatus />
              </Link>
            )}
          </div>
        </>
        )}
      </header>
    </>
  );
}
