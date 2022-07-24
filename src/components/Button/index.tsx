import React from 'react';

import mainStyle from '../../assets/sass/main.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined, 
  onClick?: () => void,
  children?: React.ReactNode
}

function Button({ onClick, type, children }: Props) {  
  return(
    <button 
    onClick={onClick} 
    type={type} 
    className={mainStyle["btn-primary"]}>
    <span>{children}</span>
  </button> 
  )
}

export default Button;