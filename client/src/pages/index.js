import Title from "../components/ui/title/Title";
import Product from "../components/product/Product";
import styles from "./index.module.scss";
import { useContext, useEffect, useState } from "react";
import Input from "../components/ui/input/Input";
import { useRouter } from "next/router";
import axios from "axios";
import Context from "../context/Context";

export default function Home() {
  const { user } = useContext(Context);
  const router = useRouter();
  const { categories, news, suggestions } = router.query;
  const [products, setProducts] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState(products);
  let options;
  if (suggestions) {
    options = {
      sug: suggestions,
      gender: user?.gender,
    };
  }
  if (categories) {
    options = {
      categories,
    };
  }
  if (news) {
    options = {
      new: news,
    };
  }

  useEffect(() => {
    const getProd = async () => {
      try {
        const res = await axios.get("http://localhost:3030/api/products/", {
          params: options,
        });
        setProducts(res.data);
        setFiltredProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProd();
  }, [router.query]);

  const handleFilter = (val) => {
    setFiltredProducts(
      products.filter((el) => {
        const a = el.title.toLowerCase().includes(val.toLowerCase());
        return (
          el.title.toLowerCase().includes(val.toLowerCase()) ||
          el.desc.toLowerCase().includes(val.toLowerCase())
        );
      })
    );
  };

  return (
    <div>
      <Title
        title={
          categories === "cloths"
            ? "Habillement"
            : categories === "shoes"
            ? "Baskettes"
            : categories === "accessories"
            ? "accessoires"
            : news
            ? "Nouveautés"
            : "Suggestions"
        }
      />
      {filtredProducts.length > 0 && (
        <div className={styles.search__bar}>
          <Input
            type="text"
            name="Filter"
            label="Recherche"
            placeholder="Recherche"
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
      )}
      {filtredProducts.length > 0 ? (
        <div className={styles.product__cards}>
          {filtredProducts?.map((product) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.text__indispo}>
          <p>Aucun produit disponible.</p>
        </div>
      )}
    </div>
  );
}
