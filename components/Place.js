import styles from "../styles/Place.module.scss";
import { Button } from "antd";
import { motion } from "framer-motion";

//Images
import map from "../public/images/map.png";
import taxi from "../public/icons/taxi.svg";

const Place = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <div className={styles.row}>
          <h3>Место проведения:</h3>

          <Button icon={<motion.img src={taxi.src} alt="review" />}>
            Вызвать такси до места
          </Button>
        </div>
        <motion.img src={map.src} alt={map} />
        <div className={styles.grid}>
          <div className={styles.frame}>
            <h4>Как нас найти:</h4>
            <p>Третий поворот налево, возле супермаркета «Перекрёсток»</p>
            <Button>Скачать схему &gt;</Button>
          </div>
          <div className={styles.frame}>
            <h4>Подробности:</h4>
            <p>Внимание! Последний автобус отходит в 22:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
