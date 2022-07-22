import React from 'react';
import styles from './header.module.scss';
import logo from '../../images/logo.svg';
import Container from '../container/container';
import Menu from '../menu/menu';
import MenuItem from '../menu/menu-item';
import Button from '../button/button';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Container className={styles['container']}>
        <a href='#' className={styles['logo']}>
          <img src={logo} alt="News" />
        </a>
        <Menu className={styles['menu']}>
          <MenuItem label="Главная" active={true} />
          <MenuItem label="Афиша" />
          <MenuItem label="О компании" />
          <MenuItem label="Контакты" />
        </Menu>
        <div className={styles['buttons']}>
          <Button className={styles['log-in']} size="fixed" outline>Войти</Button>
          <Button size="fixed">Регистрация</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
