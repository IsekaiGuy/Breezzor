import Image from "next/image";
import styles from "../styles/Author.module.scss";
import ellipse from "../public/images/Ellipse.png";

const Author = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>Организатор:</h3>
          <div className={styles.confirmed}>
            <div className={styles.icon}></div>
            <p>Личность подтверждена</p>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.frame}>
            <Image src={ellipse} alt="ellipse" />

            <div className={styles.annotation}>
              <p>Yvonnick Alexandrovich</p>
              <p>На сайте с Января 2021 г</p>
            </div>
          </div>
          <div className={styles.paragraphs}>
            <p>
              Сейчас я готов передать свою технологию сыроделия! За последний
              год я смог обучить более 200 000 человек сыроделию онлайн.
              <br />
              Уверен, что приготовить сыр получится и у вас! Вы узнаете как на
              самом деле делается сыр на производстве и на кухне. Увидите и
              узнаете все тонкости и нюансы реального сыроделия от человека,
              который развил сыроварню с 0 до 1000л молока в день!
              <br />
              <br />
              Современные молочные заводы, в большинстве своем работают без
              молока. Сухая сыворотка и химические реагенты - вот что вы купите
              в магазине под названием &apos;сыр&apos;. Хороший сыр можно найти
              только на небольших частных сыроварнях, да и то не всегда он
              вкусный, а зачастую ещё и дорогой!
              <br /> Что же, пора вам решать, что вы будете кушать. Химическое
              сырье из магазина или свой настоящий сыр?
            </p>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Author;
