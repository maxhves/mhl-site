import React from 'react';

function LeetcodeIcon({className}: { className?: string }) {
  return (
    <svg className={`w-8 h-8 ${className}`} viewBox="0 0 40 40">
      <path
        d="m26.837 29.884-4.495 4.344c-.777.779-1.852 1.104-3.039 1.104-1.186 0-2.261-.325-3.04-1.104l-7.22-7.271c-.778-.779-1.17-1.917-1.17-3.105 0-1.189.392-2.262 1.17-3.04l7.199-7.3c.778-.779 1.875-1.075 3.061-1.075 1.187 0 2.262.325 3.039 1.103l4.495 4.344c.856.858 2.275.828 3.166-.064.892-.893.922-2.312.065-3.168l-4.348-4.393a8.425 8.425 0 0 0-4.075-2.229l4.112-4.171c.86-.857.83-2.277-.062-3.169-.892-.891-2.312-.92-3.17-.063L5.692 17.462c-1.635 1.637-2.49 3.895-2.49 6.392 0 2.496.855 4.825 2.49 6.458l7.245 7.268c1.635 1.632 3.895 2.42 6.39 2.42 2.495 0 4.755-.853 6.391-2.49l4.349-4.395c.856-.857.826-2.275-.065-3.167-.892-.891-2.31-.921-3.165-.064Zm7.848-8.2H17.777c-1.17 0-2.117 1.006-2.117 2.243 0 1.236.947 2.243 2.117 2.243h16.908c1.168 0 2.117-1.007 2.117-2.243 0-1.237-.949-2.244-2.117-2.244Z"/>
    </svg>
  );
}

export default LeetcodeIcon;