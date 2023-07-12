import React from 'react';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';
export const Paragraph = ({ children, size = 'm', className, ...props }: ParagraphProps) => {
  return (
    <p className={cn(styles.paragraph, styles[size], className)} {...props}>
      {children}
    </p>
  );
};


export default Paragraph;