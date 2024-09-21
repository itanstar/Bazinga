// src/pages/Plastic.jsx
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import PTbottle from '../components/PTbottle';

const Plastic = () => {
  return (
    <PageWrapper>
      <h1>Plastic Waste</h1>
      <PTbottle />
      <p>Information about recycling plastic waste.</p>
    </PageWrapper>
  );
};

export default Plastic;
