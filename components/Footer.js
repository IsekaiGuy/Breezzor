import styles from "../styles/Footer.module.scss";
import { motion } from "framer-motion";

//Icons
import globe from "../public/icons/globe.svg";
import facebook from "../public/icons/Facebook.svg";
import inst from "../public/icons/Inst.svg";
import twitter from "../public/icons/Twitter.svg";

const Footer = () => {
  return (
    <footer className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.about}>
            <h4>О компании</h4>
            <ul>
              <li>Кто мы</li>
              <li>Что мы делаем</li>
              <li>Команда</li>
            </ul>
          </div>

          <div className={styles.business}>
            <h4>Для бизнеса</h4>
            <ul>
              <li>Добавить пляжи</li>
              <li>Добавить услуги</li>
            </ul>
          </div>

          <div className={styles.support}>
            <h4>Поддержка</h4>
            <ul>
              <li>Связаться с нами</li>
              <li>Пользовательское соглашение</li>
              <li>Политика конфиденциальности</li>
              <li>Публичная оферта для поставщиков</li>
            </ul>
          </div>

          <div className={styles.career}>
            <h4>Карьера</h4>
            <ul>
              <li>Присоединиться к команде</li>
              <li>Список вакансий</li>
            </ul>
          </div>

          <div className={styles.press}>
            <h4>Пресс-центр</h4>
            <ul>
              <li>Подписка на пресс релизы</li>
            </ul>
          </div>
          <div className={styles.line}></div>
        </div>

        <div className={styles.row}>
          <p>© 2021 Breezzor inc. All rights reserved</p>
          <div className={styles.lang}>
            <motion.img src={globe.src} alt="globe" />
            <p>Русский (RU)</p>
            <div className={styles.social}>
              <motion.img src={facebook.src} alt="Facebook" />
              <motion.img src={inst.src} alt="Instagram" />
              <motion.img src={twitter.src} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
