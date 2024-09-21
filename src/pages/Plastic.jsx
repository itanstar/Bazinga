// src/pages/Plastic.jsx
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import PTbottle from '../components/PTbottle';
import WashBottle from '../components/WashBottle';

const Plastic = () => {
  return (
    <PageWrapper>
      <h1>Plastic Waste</h1>
      
      <section>
        <h2>1. Removing Labels</h2>
        <PTbottle />
        <p>
          It's important to remove labels from plastic containers before recycling.<br />
          Leaving labels on can cause confusion during the recycling process.<br />
          <strong style={{ fontSize: '1.2em' }}>Therefore, make sure to remove the label and rinse the container.</strong>
        </p>
      </section>

      <section>
        <h2>2. Rinsing Before Disposal</h2>
        <WashBottle />
        <p>
          Always rinse plastic containers before disposing of them.<br />
          Food residues can cause problems in the recycling process.<br />
          <strong style={{ fontSize: '1.2em' }}>It is advisable to wash the containers and let them dry before disposal.</strong>
        </p>
      </section>

      
    </PageWrapper>
  );
};

export default Plastic;
