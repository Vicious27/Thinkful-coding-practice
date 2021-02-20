import React from 'react';

export default function Bubble(props) {
  let animS = (Math.random() * 6.5) + (props.num % 4) + .6;
  let aniMs = Math.random() * 900;
  let tranfX = Math.random() * 300;
  let transfY = Math.random() * 960;
  let transX = Math.random() * 750;
  let rad = Math.random() * 90;

  return (
    <g
      style={{
        animation: `up ${animS}s ${aniMs}ms infinite`,
      }}
    >
      <g
        transform={`translate(${tranfX} ${transfY})`}
        style={{
          transform: `translateX(${transX}px)`,
        }}
      >
        <circle cx='35' cy='35' r={`${rad}`} />
      </g>
    </g>
  )
}