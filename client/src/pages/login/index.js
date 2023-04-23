import React, { useContext } from "react";
import { useState } from "react";
import Input from "../../components/ui/input/Input";
import Router from "next/router";
import Link from "next/link";
import styles from "./index.module.scss";
import Title from "../../components/ui/title/Title";
import axios from "axios";
import Context from "../../context/Context";

function login() {
  const { setUser } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:3030/api/auth/login", {
        username,
        password,
      });
      setUser(res.data);
      Router.push("/");
    } catch (err) {
      console.log(err);
      setError("Wrong credentials");
    }
  };

  return (
    <div className={styles.page__login}>
      <Title title="Login" />
      <form className={styles.form__login} onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name="Username"
            label="Nom"
            placeholder="Entrer votre nom..."
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            name="Password"
            label="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrer votre mot de passe..."
            required
          />
        </div>
        <div>
          <input className="btn btn-black" type="submit" value="Se connecter" />
          <Link href="/register">
            <a className={styles.button__register}>S'enregistrer?</a>
          </Link>
        </div>
        <a style={{ color: "red" }}> {error}</a>
      </form>
    </div>
  );
}

export default login;
