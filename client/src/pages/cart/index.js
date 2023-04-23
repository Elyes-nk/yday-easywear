import React, { useContext, useState } from "react";
import Title from "../../components/ui/title/Title";
import Context from "../../context/Context";
import styles from "./index.module.scss";
import Pay from "../../../public/payment.png";
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "./stripe";
import Router from "next/router";
import Input from "../../components/ui/input/Input";

const stripePromise = loadStripe(
  "pk_test_51KHlC8C8XExSuQ3wbpTDJFyWflV64qb3YEwx21M9fUo1S8mv3JUFjs9rYsNe0PLEzFsWoeX4eyJuPgKfRUF2v1fe00BskIzVoI"
);

const Index = () => {
  const { cart, total, addItem, deductItem, clearCart, user, removeItem } =
    useContext(Context);

  const [adresse, setAdresse] = useState(null);

  const totalPrice = cart
    ? cart.reduce((prev, item) => prev + item.product.price * item.amount, 0)
    : 0;

  const handleConfirmation = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const stripe = await stripePromise;
        const response = await stripeService.createSession({
          userId: user?._id,
          address: adresse,
          products: cart,
          amount: totalPrice,
        });
        await stripe.redirectToCheckout({
          sessionId: response.id,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      Router.push("/login");
    }
  };

  return (
    <div>
      <Title title="Panier" />
      <div className={styles.cart__content}>
        {cart?.length ? (
          <table>
            <thead>
              <tr>
                <td></td>
                <td>Produit</td>
                <td>Quantités</td>
                <td>Prix</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <img
                      src={item.product.img}
                      alt="Image"
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>{item.product.title}</td>
                  <td>{item.amount}</td>
                  <td>{item.amount * item.product.price} €</td>
                  <td>
                    <button
                      onClick={() => addItem(item.product)}
                      className="btn"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => {
                        deductItem(item.product);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-white"
                      onClick={() => {
                        removeItem(item.product.id);
                      }}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>Total :</td>
                <td>{total}</td>
                <td>{totalPrice} €</td>
                <td></td>
                <td></td>
                <td>
                  <button
                    className="btn btn-white"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    Supprimer le panier
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <p>Aucun produit sélectionné.</p>
          </div>
        )}
        <form onSubmit={(e) => handleConfirmation(e)}>
          {user && (
            <div>
              <Input
                type="text"
                name="Username"
                label="Adresse"
                placeholder="Entrer votre adres..."
                onChange={(e) => setAdresse(e.target.value)}
                required
              />
            </div>
          )}
          {cart?.length ? (
            <div className={styles.btn__group}>
              <input
                type="submit"
                className="btn btn-black"
                value={user ? "Payer" : "Login"}
              />
            </div>
          ) : (
            <div className={styles.btn__group}></div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Index;
