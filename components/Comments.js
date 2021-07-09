import styles from "../styles/Comments.module.scss";
import { motion } from "framer-motion";

//Images
import fingerup from "../public/icons/fingerup.svg";
import comment from "../public/images/comment.png";

const Comments = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Отзывы:</h3>
          <div className={styles.frame}>
            <div className={styles.rating}>
              <motion.img src={fingerup.src} alt="cool" />
              <h4>4.6</h4>
            </div>
            <a>Читать все &gt;</a>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.author}>
            <motion.img src={comment.src} alt="comment" />
            <div className={styles.info}>
              <p>Alexandra</p>
              <p>На сайте с Января 2021 г.</p>
            </div>
          </div>
          <div className={styles.paragraph}>
            <p>
              Сейчас я готов передать свою технологию сыроделия! За последний
              год я смог обучить более 200 000 человек сыроделию онлайн.
            </p>
            <p>
              Уверен, что приготовить сыр получится и у вас! Вы узнаете как на
              самом деле делается сыр на производстве и на кухне. Увидите и
              узнаете все тонкости и нюансы реального сыроделия от человека,
              который развил сыроварню с 0 до 1000л молока в день!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Comments;
