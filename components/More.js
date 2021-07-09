import styles from "../styles/More.module.scss";
import { Button, Col, Row } from "antd";
import Card from "./Card";
import cards from "../cards";

const More = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h2>Вам также может понравиться</h2>
        <p className={styles.paragraph}>
          Всего символов: 321 Без пробелов: 272 Количество слов: 50 Quis
          exercitation deserunt aliquip Lorem non velit id ad incididunt eu. Eu
          labore eiusmod duis ad cupidatat occaecat dolor anim eiusmod fugiat
          labore sunt eu. Officia mollit eu officia excepteur aute nostrud
          aliquip. Deserunt ullamco irure esse eu labore consequat.
        </p>
        <div className={styles.frame}>
          <Button type="primary">Все</Button>
          <Button type="primary">Отдых</Button>
          <Button type="primary">Развлечения</Button>
          <Button type="primary">Кулинарные</Button>
          <Button type="primary">Культурные</Button>
          <Button type="primary">Активные</Button>
        </div>
        <div className={styles.group}>
          <Row gutter={40}>
            {cards.map((cardinfo) => (
              <Col span={8} key={cardinfo.id}>
                <Card
                  title="Card title"
                  bordered={false}
                  id={cardinfo.id}
                  name={cardinfo.name}
                  image={cardinfo.image}
                  offer={cardinfo.offer}
                  country={cardinfo.country}
                  region={cardinfo.region}
                  price={cardinfo.price}
                  rating={cardinfo.rating}
                  description={cardinfo.description}
                ></Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default More;
