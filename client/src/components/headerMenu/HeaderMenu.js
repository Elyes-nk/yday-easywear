import React, { useState, useContext } from "react";
import Link from "next/link";
import styles from "./HeaderMenu.module.scss";
import LogoCart from "../../../public/cart.jpeg";
import Logo from "../../../public/ew.png";
import { useRouter } from "next/router";
import Context from "../../../src/context/Context";

const HeaderMenu = () => {
  const { total, user, setUser } = useContext(Context);
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    router.push("/login");
  };
  return (
    <>
      <div className={styles.header__logo}>
        <img src={Logo.src} alt="Shop"/>
      </div>
      <div className={styles.header__menu}>
        <nav>
          <ul>
            <li>
              <Link href={{ pathname: "/", query: { news: true } }}>
                <a>Nouveautés</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/", query: { suggestions: true } }}>
                <a>Nos suggestions</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/", query: { categories: "shoes" } }}>
                <a>Sneakers</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/", query: { categories: "cloths" } }}>
                <a>Habillement</a>
              </Link>
            </li>
            <li>
              <Link
                href={{ pathname: "/", query: { categories: "accessories" } }}
              >
                <a>Accessoires</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.header__toolbar}>
        {user ? (
          <a className="btn btn-white" onClick={() => handleLogout()}>
            Logout
          </a>
        ) : (
          <Link href="/login">
            <a className="btn btn-white">S'identifier</a>
          </Link>
        )}
        <a>{user?.username}</a>
        <Link href="/cart">
          <a>
            <img src={LogoCart.src} alt="Cart" />
            {total}
          </a>
        </Link>
      </div>
    </>
  );
};

export default HeaderMenu;
