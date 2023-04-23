import React, { useContext } from "react";
import Input from "../../components/ui/input/Input";
import { useState } from "react";
import styles from "./index.module.scss";
import Router from "next/router";
import Title from "../../components/ui/title/Title";
import stylesInput from "../../components/ui/input/Input.module.scss";
import axios from "axios";
import Context from "../../context/Context";

function register() {
  const { setUser } = useContext(Context);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [sexe, setSexe] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    register();
  };

  const register = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3030/api/auth/register",
        {
          email,
          username,
          password,
          gender: sexe,
        }
      );
      setUser(res.data);
      Router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.page__register}>
      <Title title="Inscription" />
      <form className={styles.form__register} onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            label="Nom"
            name="Username"
            placeholder="Entrer votre nom..."
            onChange={(e) => setUsername(e.target.value)}
            required={true}
          />
          <Input
            type="email"
            name="Email"
            label="Email"
            placeholder="Entrer votre email..."
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <Input
            type="password"
            name="Password"
            label="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrer votre mot de passe..."
            required={true}
          />

          <div className={stylesInput.form__group}>
            <label>Sexe</label>
            <div className={styles.container}>
              <div className={styles.containertwo}>
                <label>Homme</label>
                <input
                  type="checkbox"
                  checked={sexe === "man"}
                  onChange={() => setSexe("man")}
                />
              </div>
              <div className={styles.containertwo}>
                <label>Femme</label>
                <input
                  type="checkbox"
                  checked={sexe === "woman"}
                  onChange={() => setSexe("woman")}
                />
              </div>
            </div>
          </div>
        </div>
        <input className="btn btn-black" type="submit" value="S'enregistrer" />
      </form>
    </div>
  );
}

export default register;
