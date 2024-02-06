import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className='flex items-center shrink-0'>
      <img
        className='w-6 h-6 rounded-full mr-2'
        src={photoURL}
        alt={displayName}
      />
      <span className='hidden md:block mx-2 text-sm'>{displayName}님, 안녕하세요.</span>
    </div>
  );
}
