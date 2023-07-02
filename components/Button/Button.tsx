import React from 'react';
import styles from './Button.module.css';
import ButtonProps from './Button.props';
import cn from 'classnames';

const Button = ({ appearance = 'primary', children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={
        cn(styles.button, styles[appearance], className)
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;