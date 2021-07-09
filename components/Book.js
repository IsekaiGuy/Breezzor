import styles from "../styles/Book.module.scss";
import { motion } from "framer-motion";
import { Button } from "antd";
import Image from "next/image";

//Images
import clock from "../public/icons/clock.svg";
import people from "../public/icons/people.svg";
import bag from "../public/icons/bag.svg";
import language from "../public/icons/language.svg";
import discount from "../public/icons/discount.svg";
import calendar from "../public/images/calendar.png";
import bookimage from "../public/images/bookimage.png";

const Book = () => {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.discount}>
            <motion.img src={discount.src} alt="discount" layout="fill" />
          </div>

          <div className={styles.bookimage}>
            <Image layout="fill" src={bookimage.src} alt="bookimage" />
          </div>
          <div className={styles.column}>
            <h2>Урок сыроделия</h2>
            <p>
              Среди сыроваров есть тенденция, что они не хотят делиться своими
              секретами и рецептами. Говорят, что это очень сложное дело...что
              нужно ехать в Европу или идти в подмастерье к настоящему сыровару
              на несколько лет, да и то не факт, что тебе раскроют все секреты.
              Но это не так!
            </p>
            <div className={styles.info}>
              <div className={styles.block}>
                <Image
                  width={296}
                  height={232}
                  src={calendar.src}
                  alt="calendar"
                  className={styles.calendar}
                />
                <h3>От 1 373 ₽ / Чел.</h3>
              </div>
              <div className={styles.frame}>
                <ul>
                  <li>
                    <span>
                      <motion.img src={clock.src} alt="icon" />
                      60
                    </span>
                    мин.
                  </li>
                  <li>
                    <span>
                      <motion.img src={people.src} alt="icon" />
                      До 10 человек
                    </span>
                  </li>
                  <li>
                    <span>
                      <motion.img src={bag.src} alt="icon" />
                      Что включено:
                    </span>{" "}
                    &#10004; Напитки &#10004; Плед &#10004; Сувениры
                  </li>
                  <li>
                    <span>
                      <motion.img src={language.src} alt="icon" />
                      Языки тура:{" "}
                    </span>
                    &#10004; Английский &#10004; Французкий
                  </li>
                  <li>Бесплатная отмена</li>
                  <Button ghost>Текст в кнопке</Button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default Book;
