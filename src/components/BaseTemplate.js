import React from 'react';

function BaseTemplate({ content }) {
  return (
    <div>
      <header>Header</header>
      <main>{content}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default BaseTemplate;
