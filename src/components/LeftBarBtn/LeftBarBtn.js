import React from 'react';

function LeftBarBtn({ Icon, Text }) {
  return (
    <a href='#' class='leftBarBtn'>
      <Icon />
      <h3>{Text}</h3>
    </a>
  );
}

export default LeftBarBtn;
