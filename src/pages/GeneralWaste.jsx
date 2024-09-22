// src/pages/GeneralWaste.jsx
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const GeneralWaste = () => {
  return (
    <PageWrapper>
      <h1>General Waste</h1>
      <img src="\trashbag.png" alt="trash bag" width="350" height="450" />
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>General waste refers to the waste that cannot be recycled or composted.</p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>It is important to dispose of general waste properly to ensure a clean and safe environment.</p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>All general waste should be placed in designated general waste bags, you can buy general bags at any convenience stores or supermarkets.</p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px' }}>
        General waste bags are collected <strong>from Monday to Saturday mornings</strong>, except for Sundays
      </p>

      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>When using general waste bags, make sure to:</p>
      <ol>
        <li>Seal the bag tightly to prevent any spillage.</li>
        <li>Do not overfill the bag; it should be easy to close.</li>
        <li>Place the bag in the appropriate collection point on your designated collection day</li>
      </ol>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px'}}>By following these guidelines, you help reduce landfill waste and contribute to a cleaner community.</p>
    </PageWrapper>
  );
};

export default GeneralWaste;

