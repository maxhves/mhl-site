import React from 'react';

function LinkedinIcon({className}: { className?: string }) {
  return (
    <svg className={`w-8 h-8 ${className}`} viewBox="0 0 40 40">
      <path
        d="M31.667 0H8.333A8.334 8.334 0 0 0 0 8.333v23.334A8.334 8.334 0 0 0 8.333 40h23.334A8.333 8.333 0 0 0 40 31.667V8.333A8.333 8.333 0 0 0 31.667 0ZM13.333 31.667h-5V13.333h5v18.334Zm-2.5-20.447c-1.61 0-2.916-1.317-2.916-2.94s1.306-2.94 2.916-2.94c1.61 0 2.917 1.317 2.917 2.94s-1.305 2.94-2.917 2.94Zm22.5 20.447h-5v-9.34c0-5.614-6.666-5.189-6.666 0v9.34h-5V13.333h5v2.942c2.326-4.31 11.666-4.628 11.666 4.127v11.265Z"/>
    </svg>
  );
}

export default LinkedinIcon;