import { useState } from "react";
import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // <-- get history from hook

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ymp6ekgg");
    data.append("cloud_name", "doieuxngb");
    await fetch("https://api.cloudinary.com/v1_1/doieuxngb/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const product = { ...inputs, img: data.secure_url };
        addProduct(product, dispatch);
        navigate("/products");
      });
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="addProductItem">
              <label>Title</label>
              <input
                name="title"
                type="text"
                placeholder="Adidas, Nike.."
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                name="desc"
                type="text"
                placeholder="Description..."
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input
                name="price"
                type="number"
                placeholder="100"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Size</label>
              <input
                name="size"
                type="text"
                placeholder="XL, L..."
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Color</label>
              <input
                name="color"
                type="text"
                placeholder="Black, white..."
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Categories</label>
              <select name="categories" onChange={handleChange}>
                <option>Select</option>
                <option value="shoes">Shoes</option>
                <option value="cloths">Cloths</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
            <div className="addProductItem">
              <label>Stock</label>
              <select name="inStock" onChange={handleChange}>
                <option>Select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="addProductItem">
              <label>To</label>
              <select name="destinedTo" onChange={handleChange}>
                <option>Select</option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </div>
            <div className="addProductItem">
              <label>Season</label>
              <select name="seasons" onChange={handleChange}>
                <option>Select</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
              </select>
            </div>
            <div className="addProductItem">
              <label>Promotion</label>
              <input
                name="promotion"
                type="number"
                placeholder="0"
                onChange={handleChange}
              />
            </div>
            <button onClick={handleClick} className="addProductButton">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
