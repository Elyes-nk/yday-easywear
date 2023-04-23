import Link from "next/link";
import React from "react";
import styles from "./Product.module.scss";

function Product({ product }) {
  return (
    <>
      <Link href={`/shop/${product._id}`}>
        <div className={styles.product__card}>
          <img src={product.img} alt="Image" />
          <a>{product.title} </a>
          <a>{product.price} €</a>
        </div>
      </Link>
    </>
  );
}

export default Product;
