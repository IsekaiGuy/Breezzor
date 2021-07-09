import styles from "../styles/Lightbox.module.scss";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import imageGrid from "../imageGrid";
import { Image } from "antd";

function ProductImage({ id, onExpand }) {
  return (
    <motion.img
      src={imageGrid[id].src}
      alt=""
      onClick={() => onExpand(id)}
      className="related-product-image"
      layoutId={`product-${id}`}
    />
  );
}

const Lightbox = () => {
  const [productIds, setProductIds] = useState([1, 2, 3, 4, 5]);
  const [primaryProduct, setPrimaryProduct] = useState(0);
  const [state, setState] = useState(false);

  function setAsPrimary(id) {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId,
    ];

    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.code === "Escape") {
        setState(false);
      }
    });

    document.addEventListener("click", (e) => {
      if (
        e.target.className !== "ant-image-mask-info" &&
        e.target.className !== "ant-image-mask"
      ) {
        setState(false);
      }
    });
  });

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.lightbox}>
          <div className={styles.container} style={{ padding: 0 }}>
            <AnimateSharedLayout type="crossfade">
              <main className={styles["primary-container"]}>
                <AnimatePresence>
                  <motion.img
                    key={primaryProduct}
                    className={styles["primary-product-image"]}
                    src={imageGrid[primaryProduct].src}
                    alt=""
                    layoutId={`product-${primaryProduct}`}
                  />
                </AnimatePresence>
              </main>
              <aside className={styles["product-gallery"]}>
                <AnimatePresence>
                  {!state &&
                    productIds.map((id) => (
                      <ProductImage id={id} key={id} onExpand={setAsPrimary} />
                    ))}
                </AnimatePresence>
                <Image.PreviewGroup>
                  {state && (
                    <>
                      <Image src={imageGrid[0].src} alt="lightbox" />
                      <Image src={imageGrid[1].src} alt="lightbox" />
                      <Image src={imageGrid[2].src} alt="lightbox" />
                      <Image src={imageGrid[3].src} alt="lightbox" />
                      <Image src={imageGrid[4].src} alt="lightbox" />
                    </>
                  )}

                  <Image
                    src={imageGrid[6].src}
                    alt="lightbox"
                    key="six"
                    className="unique"
                    onClick={() => setState(true)}
                  />
                </Image.PreviewGroup>
              </aside>
            </AnimateSharedLayout>
          </div>
          <h3>Обзор тура:</h3>

          <div className={styles.paragraph}>
            <p>
              Среди сыроваров есть тенденция, что они не хотят делиться своими
              секретами и рецептами. Говорят, что это очень сложное дело...что
              нужно ехать в Европу или идти в подмастерье к настоящему сыровару
              на несколько лет, да и то не факт, что тебе раскроют все секреты.
              Но это не так!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default Lightbox;
