// src/pages/FoodWaste.jsx
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const FoodWaste = () => {
  return (
    <PageWrapper>
      <h1>Food Waste</h1>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>Food waste is one of the types of waste that is difficult to manage. However, if not properly handled, it poses significant hygiene risks.</p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}></p>
      {/* How to? 제목 추가 */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>How to?</h2>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>
        1. Purchase a food waste disposal container.
      </p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>
        2. Buy the payment stickers.
      </p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>
        3. Place the food waste in the container, attach the sticker, and dispose of it at the designated time.
      </p>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>1. Purchase a food waste disposal container.</h2>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>Food waste disposal containers are typically sold at large supermarkets.</p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>The prices vary according to size:</p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px'}}>
        2L = 8,500 KRW
      </p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px'}}>
        3L = 9,800 KRW
      </p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px'}}>
        5L = 12,000 KRW
      </p>
      <a href="https://www.buk.daegu.kr/index.do?menu_id=00001794" target="_blank" rel="noopener noreferrer">This is a website that organizes places where you can purchase food waste disposal containers in Buk-GU, Daegu.</a>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', fontWeight: 'bold'}}>You must use the officially designated food waste disposal containers specified by the city.</p>
    </PageWrapper>
  );
};

export default FoodWaste;
