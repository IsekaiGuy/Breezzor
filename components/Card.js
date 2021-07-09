import styles from "../styles/Card.module.scss";
import { Button, Card } from "antd";
import { motion } from "framer-motion";

//Icons
import favorite from "../public/icons/favorite.svg";
import location from "../public/icons/location.svg";
import fingerup from "../public/icons/fingerup.svg";

const CardInfo = ({
  id,
  name,
  country,
  region,
  image,
  description,
  price,
  offer,
  rating,
}) => {
  const { Meta } = Card;
  return (
    <div className={styles.container}>
      <Card
        style={{
          boxShadow: "0px 2px 12px rgba(31, 31, 31, 0.15)",
          borderRadius: "8px",
        }}
        hoverable
        cover={
          <motion.img alt={name} src={image.src} className={styles.mainimage} />
        }
      >
        <Meta
          title={<h5>{name}</h5>}
          description={
            <>
              <div className={styles.price}>
                <h5>{price} / hour</h5>
                <div className={styles.rating}>
                  <motion.img src={fingerup.src} alt="fingerup" />
                  <h4>{rating}</h4>
                </div>
              </div>
              <div className={styles.description}>
                <p>{description}</p>
              </div>
            </>
          }
          className={styles.info}
        />
      </Card>
      {offer && (
        <div className={styles.offer}>
          <p>{offer}</p>
        </div>
      )}
      <Button
        shape="circle"
        icon={<motion.img src={favorite.src} alt="favorite" />}
      ></Button>
      <div className={styles.location}>
        <motion.img src={location.src} alt="location" />
        <p>
          {country}, {region}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
