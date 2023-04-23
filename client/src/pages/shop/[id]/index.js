import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Context from "../../../context/Context";
import { productRows } from "../../../dummyData";
import styles from "./index.module.scss";
import axios from "axios";

function index() {
  const { addItem } = useContext(Context);
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProd = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3030/api/products/find/" + id
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProd();
  }, [router.query]);

  return (
    <div className={styles.container}>
      <div className={styles.left__content}>
        <img src={product?.img} alt="shop" className={styles.img} />
        <h1>{product?.title}</h1>
        <a>{product?.desc}</a>
      </div>
      <div className={styles.right__content}>
        <table>
          <thead>
            {product?.size && (
              <tr>
                <td>Taille</td>
                <td>{product?.size}</td>
              </tr>
            )}
            {product?.color && (
              <tr>
                <td>Couleur</td>
                <td>{product?.color}</td>
              </tr>
            )}
            <tr>
              <td>Disponibilité</td>
              <td>{product?.inStock ? "En stock" : "Rupture de stock"}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prix</td>
              <td>{product?.price} €</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.btn__group}>
          <button className="btn btn-black" onClick={() => addItem(product)}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
