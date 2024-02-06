import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-black text-white py-4 px-8 hover:brightness-110 transition ease-in-out delay-100 hover:bg-lime-600'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
