import { Button } from "antd";
import styles from "../styles/Header.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import Nav from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.main}>
          <div className={styles.left}>
            <Link href="/" passHref>
              <div className={styles.logo} style={{ cursor: "pointer" }} />
            </Link>
            <div className={styles.menu}>
              <a>Пляжи</a>
              <a>Breezzor pass</a>
              <a>Впечатления</a>
              <a>Маршруты</a>
            </div>
          </div>
          <div className={styles.right}>
            <SearchOutlined className={styles.search} />
            <Button ghost className={styles.ghost}>
              Вход
            </Button>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Header;
