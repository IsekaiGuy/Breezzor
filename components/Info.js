import styles from "../styles/Info.module.scss";
import { motion } from "framer-motion";

//Icons
import mask from "../public/icons/mask.svg";
import distance from "../public/icons/distance.svg";
import spray from "../public/icons/spray.svg";

const Info = () => {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <h3 className={styles.title}>Важная информация:</h3>

            <div className={styles["grid-1"]}>
              <h4>Правила отмены:</h4>
              <p>
                Впечатление можно отменить в течение 24 часов после оплаты или
                за 7 дней до начала и получить полный возврат
              </p>
              <a href="#">Подробнее &gt;</a>
            </div>

            <div className={styles["grid-2"]}>
              <h4>Требования к гостю:</h4>
              <p>
                Максимальное число гостей от 18 лет: 10. Родители могут взять с
                собой детей до 2 лет.
              </p>
              <a href="#">Подробнее &gt;</a>
            </div>

            <div className={styles["grid-3"]}>
              <h4>Алкоголь:</h4>
              <p>
                Мероприятие включает в себя алкоголь. Спиртные напитки будут
                доступны только гостям, достигшим возраста официально
                разрешённого потребления спиртных напитков.
              </p>
            </div>

            <div className={styles["grid-4"]}>
              <h4>Дополнительно:</h4>
              <p>
                Вам понадобится кастрюля на 3 литра, молоко 4 литрв, лопатка
                деревянная и халат и маска и все такое. Лучше запастись этим
                заранее.
              </p>
            </div>

            <div className={styles["grid-5"]}>
              <h4>Взять с собой:</h4>
              <ul>
                <li>✓ Кастрюля, 3 литра нержавейка</li>
                <li>✓ Молоко любое, 4 литра</li>
                <li>✓ Деревянная лопатка для помешивания</li>
                <li>✓ Марля медицинская, 1 метр</li>
                <li>✓ Халат, маска, шапочка тканевая</li>
              </ul>
            </div>

            <div className={styles["grid-6"]}>
              <h4>Информация о COVID-19:</h4>
              <ul>
                <li>
                  <motion.img src={mask.src} alt="mask" />
                  Маска обязательна
                </li>
                <li>
                  <motion.img src={distance.src} alt="distance" />
                  Дистанция 1.5 метра
                </li>
                <li>
                  <motion.img src={spray.src} alt="spray" />
                  Проводится дезинфекция
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default Info;
