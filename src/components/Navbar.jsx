import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRunning } from "react-icons/fa";
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드럽게 스크롤되도록 함
    });
  };

  return (
    <>
      {user && 
        <div className='flex justify-end py-2 px-10 w-full bg-[#f5f5f5]'>
            <User user={user} />
            <button className='bg-black text-white py-2 px-4 rounded-full hover:brightness-110' onClick={logout} >Logout</button>
        </div>
      }
      <header className={`bg-white flex py-3 px-10 w-full justify-between ${isScrolled ? 'fixed top-0 z-50' : 'relative'}`}>
        <Link to='/' onClick={scrollToTop} className='flex items-center text-3xl'>
          <FaRunning />
          <h1>NICE</h1>
        </Link>
        <nav className='flex items-center gap-14 font-semibold text-lg'>
            <Link to='/products' onClick={scrollToTop}  className='transition ease-in-out delay-100 hover:text-lime-600'>Products</Link>
            <Link to='/products/men' onClick={scrollToTop}  className='transition ease-in-out delay-100 hover:text-lime-600'>Men</Link>
            <Link to='/products/women' onClick={scrollToTop}  className='transition ease-in-out delay-100 hover:text-lime-600'>Women</Link>
        </nav>
        <div className='flex items-center gap-4'>
          {!user && 
            <button className="border-black text-sm p-2 px-4 hover:bg-black hover:text-white rounded-full border hover:border-transparent" onClick={login}>Sign in</button>
          }
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
        </div>
      </header>
    </>
  );
}
