import React, { useState} from 'react';

function Example() {
  const [changeIcon, setChangeIcon] = useState(false);
  function menuMobile() {
    setChangeIcon(!changeIcon);
  }

  return (
    <>
      <div className='exam'>
      <a onClick={menuMobile}>
        <img src={ changeIcon ? "icon/icon-hamburguer.png" : "icon/icon-close.png"}/>          
      </a>
      </div>
    </>
  );
}

export default Example;
