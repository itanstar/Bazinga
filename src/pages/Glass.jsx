// src/pages/Glass.js
import React from 'react';
import BrokenGlass from '../components/BrokenGlass';

const Glass = () => {
  return (
    <div>
      <h1>Glass</h1>
      <p>When glass is not broken, it can be disposed of in recycling just like other recyclable materials</p>
      <p>Rinse glass bottles or containers with leftover food before recycling. If there is leftover food, dispose of them as general waste</p>
      <h3>However, when it is broken, you should do the following as shown in the video</h3>
      <BrokenGlass />
      {/* How to? 제목 추가 */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>How to?</h2>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>
        1. Wrap the broken glass in a towel, newspaper, or cardboard box
      </p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>
        2. Tape it securely to prevent any shards from spilling out
      </p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>
        3. Dispose of it in a regular waste bag
      </p>
    </div>
  );
};

export default Glass;
