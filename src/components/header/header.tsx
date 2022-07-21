import React from 'react';
import styles from './header.module.scss';
import logo from '../../images/logo.svg';
import Container from '../container/container';
import Menu from '../menu/menu';
import MenuItem from '../menu/menu-item';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Container className={styles['header__container']}>
        <a href='#' className={styles['header__logo']}>
          <img src={logo} alt="News" />
        </a>
        <Menu className={styles['header__menu']}>
          <MenuItem label="Главная" active={true} />
          <MenuItem label="Афиша" />
          <MenuItem label="О компании" />
          <MenuItem label="Контакты" />
        </Menu>
      </Container>
    </header>
  );
};

export default Header;
