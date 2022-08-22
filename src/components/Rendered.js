import React from 'react';
import BaseTemplate from './BaseTemplate';

function Rendered() {
  return <BaseTemplate content={<SubApp />} />;
}

export default Rendered;

const SubApp = () => {
  return (
    <div>
      <h1>Render Props</h1>
      <p>This is render props in action</p>
    </div>
  );
};
