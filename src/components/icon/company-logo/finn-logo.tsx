import React from 'react';

//region Implementation

export default function FinnLogo({className}: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#06BEFB"
        d="M0 0h24v24H0z"
      />
      <path
        fill="#04BEFB"
        stroke="#fff"
        strokeWidth=".75"
        d="M12.625 7.375h8c.3452 0 .625.27982.625.625v8c0 .3452-.2798.625-.625.625H12V8c0-.34518.2798-.625.625-.625Z"
      />
      <path
        fill="#0163FB"
        stroke="#fff"
        strokeWidth=".75"
        d="M12 15.5714v1.0536H4.375c-.48201 0-.80579-.0008-1.0473-.0333-.23073-.031-.32948-.0846-.39464-.1498-.06516-.0651-.11877-.1639-.14979-.3946C2.7508 15.8058 2.75 15.482 2.75 15V8.42857c0-.43037.0053-.54992.03507-.63499a.62502.62502 0 0 1 .38351-.38351c.08507-.02977.20462-.03507.63499-.03507 2.4253 0 3.54232.0053 4.42925.31566 1.61576.56538 2.88618 1.83576 3.45148 3.45154.3104.8869.3157 2.0039.3157 4.4292Z"
      />
    </svg>
  );
}

//endregion