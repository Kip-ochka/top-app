import React from 'react';
import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';

const Htag = ({ children, Tag = 'h1' }: HtagProps) => {
  return (
    <Tag className={cn(styles[Tag])}>{children}</Tag>
  );
};

export default Htag;