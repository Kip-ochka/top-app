import React from 'react';
import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css'
  ;
const Tag = ({ size = 's', color = 'ghost', children, className, href, ...props }: TagProps) => {
  return (
    <div
      className={cn(className, styles.tag, styles[color], styles[size])}
      {...props}
    >
      {href ? <a href={href} target='blank'>{children}</a> : children}
    </div>
  );
};

export default Tag;