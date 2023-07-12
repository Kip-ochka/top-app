import React from 'react';
import styles from './Footer.module.css';
import FooterProps from './Footer.props';
import cn from 'classnames';
import { Paragraph } from '@/components';
import format from 'date-fns/format';

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} | Все права защищены</div>
      <a href='#' target='blank'>Пользовательское соглашение</a>
      <a href='#' target='blank'>Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;
