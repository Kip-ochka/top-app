import React from 'react';
import styles from './Button.module.css';
import ButtonProps from './Button.props';
import cn from 'classnames';
import ArrowIcon from './assets/buttonArrow.svg';

const Button = ({ appearance = 'primary', arrow = 'none', children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={
        cn(styles.button, styles[appearance], className)
      }
      {...props}
    >
      {children}
      {arrow !== 'none' && <span className={cn(styles.arrow, { [styles.arrow]: arrow === 'down' })}>
        <ArrowIcon />
      </span>}
    </button>
  );
};

export default Button;