import React from 'react';
import Container from '../container/container';
import styles from './footer.module.scss';
import logo from '../../images/logo.svg';
import VK from '../../icons/vk';
import Telegram from '../../icons/telegram';
import Zen from '../../icons/zen';
import Odnoklassniki from '../../icons/odnoklassniki';

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <Container className={styles['container']}>
        <div className={styles['left']} >
          <a href="#" className={styles['logo']}>
            <img src={logo} alt="News" />
          </a>
          <div className={styles['copyright']}>© Photo, Inc. 2019. We love our users!</div>
        </div>

        <div className={styles['social']}>
          <a href="#" className={styles['social-link']}>
            <VK />
          </a>
          <a href="#" className={styles['social-link']}>
            <Telegram />
          </a>
          <a href="#" className={styles['social-link']}>
            <Zen />
          </a>
          <a href="#" className={styles['social-link']}>
            <Odnoklassniki />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
