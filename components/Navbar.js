import Image from "next/image";
import { Divider, Button } from "antd";
import styles from "../styles/Navbar.module.scss";
import { useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

//ICONS
import whattosee from "../public/icons/whattosee.svg";
import host from "../public/icons/host.svg";
import important from "../public/icons/important.svg";
import dates from "../public/icons/dates.svg";
import share from "../public/icons/share.svg";
import favorite from "../public/icons/favorite.svg";

const Nav = () => {
  const [offset, setOffset] = useState(false);

  const [state, setState] = useState({
    review: false,
    author: false,
    info: false,
    date: false,
  });

  useEffect(() => {
    if (state.author) {
      window.scrollTo(0, 1000);
    } else if (state.review) {
      window.scrollTo(0, 400);
    } else if (state.info) {
      window.scrollTo(0, 1456);
    } else if (state.date) {
      window.scrollTo(0, 2970);
    }
  }, [state]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 250) {
        console.log(offset);
        setOffset(true);
      } else {
        console.log(offset);
        setOffset(false);
      }
    });
  }, [offset]);

  return (
    <AnimateSharedLayout type="crossfade">
      {offset ? (
        <div className={styles.bg}>
          <motion.div
            layoutId="123"
            className={styles.emotions}
            style={{
              position: "fixed",
              width: "100vw",
              height: "80px",
              padding: "0 14vw",
              top: "50px",
              background: "#ffffff",
              zIndex: "80000",
            }}
          >
            <Button
              type="outline"
              icon={<Image src={whattosee} alt="review" />}
              onClick={() => setState({ review: true })}
            >
              Обзор
            </Button>

            <Divider
              type="vertical"
              style={{
                height: "7vh",
                borderLeft: "2px solid rgba(0, 0, 0, 0.06)",
              }}
            />

            <Button
              type="outline"
              icon={<Image src={host} alt="review" />}
              onClick={() => setState({ author: true })}
            >
              Организатор
            </Button>
            <Divider
              type="vertical"
              style={{
                height: "7vh",
                borderLeft: "2px solid rgba(0, 0, 0, 0.06)",
              }}
            />
            <Button
              type="outline"
              icon={<Image src={important} alt="review" />}
              onClick={() => setState({ info: true })}
            >
              Информация
            </Button>
            <Divider
              type="vertical"
              style={{
                height: "7vh",
                borderLeft: "2px solid rgba(0, 0, 0, 0.06)",
              }}
            />
            <Button
              type="outline"
              icon={<Image src={dates} alt="review" />}
              onClick={() => setState({ date: true })}
            >
              Выбрать дату
            </Button>
          </motion.div>
        </div>
      ) : (
        <div className={styles.bg}>
          <motion.nav className={styles.nav} layoutId="123">
            <div className={styles["nav__row"]}>
              <div className={styles["nav__row__breadcrumbs"]}>
                Франция &gt; Париж &gt; Туры &gt; Своими руками
              </div>
              <div className={styles["nav__row__right"]}>
                <Button
                  type="outline"
                  icon={<Image src={share} alt="review" />}
                >
                  Поделиться
                </Button>

                <Button
                  type="outline"
                  icon={<Image src={favorite} alt="review" />}
                >
                  В избранное
                </Button>
              </div>
            </div>

            <h2 className={styles.title}>Урок сыроделия</h2>

            <div className={styles.emotions}>
              <Button
                type="outline"
                icon={<Image src={whattosee} alt="review" />}
                onClick={() => setState({ review: true })}
              >
                Обзор
              </Button>

              <Divider
                type="vertical"
                style={{
                  height: "7vh",
                  borderLeft: "2px solid rgba(0, 0, 0, 0.06)",
                }}
              />

              <Button
                type="outline"
                icon={<Image src={host} alt="review" />}
                onClick={() => setState({ author: true })}
              >
                Организатор
              </Button>
              <Divider
                type="vertical"
                style={{
                  height: "7vh",
                  borderLeft: "2px solid rgba(0, 0, 0, 0.06)",
                }}
              />
              <Button
                type="outline"
                icon={<Image src={important} alt="review" />}
                onClick={() => setState({ info: true })}
              >
                Информация
              </Button>
              <Divider
                type="vertical"
                style={{
                  height: "7vh",
                  borderLeft: "2px solid rgba(0, 0, 0, 0.06)",
                }}
              />
              <Button
                type="outline"
                icon={<Image src={dates} alt="review" />}
                onClick={() => setState({ date: true })}
              >
                Выбрать дату
              </Button>
            </div>
          </motion.nav>
        </div>
      )}
    </AnimateSharedLayout>
  );
};

export default Nav;
