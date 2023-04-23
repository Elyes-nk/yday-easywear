import { Link, useLocation, useNavigate } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { updateProduct } from "../../redux/apiCalls";

export default function Product() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // <-- get history from hook

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  // const admin = useSelector((state) => state.user?.currentUser?.isAdmin);
  // const navigate = useNavigate(); // <-- get history from hook

  // useEffect(() => {
  //   if (admin) {
  //     navigate("/login");
  //   }
  // }, [admin, navigate]);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([12, 12, 39, 11]);

  const product =
    useSelector((state) =>
      state.product.products.find((product) => product._id === productId)
    ) || {};

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (file) {
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
          const prod = {
            ...product,
            ...inputs,
            img: data.secure_url,
          };
          updateProduct(product._id, prod, dispatch);
          navigate("/products");
        });
    } else {
      const prod = { ...product, ...inputs };
      updateProduct(product._id, prod, dispatch);
      navigate("/products");
    }
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product?.img} alt="" className="productInfoImg" />
                <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{product._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">sales:</span>
                  <span className="productInfoValue">0</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">in stock:</span>
                  <span className="productInfoValue">
                    {product.inStock ? "Yes" : "NO"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Product name</label>
                <input
                  name="title"
                  type="text"
                  placeholder={product.title}
                  onChange={handleChange}
                />
                <label>Description</label>
                <input
                  name="desc"
                  type="text"
                  placeholder={product.desc}
                  onChange={handleChange}
                />
                <label>Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder={product.price}
                  onChange={handleChange}
                />
                <label>Size</label>
                <input
                  name="size"
                  type="text"
                  placeholder="XL, L..."
                  onChange={handleChange}
                />
                <label>Color</label>
                <input
                  name="color"
                  type="text"
                  placeholder="Black, white..."
                  onChange={handleChange}
                />
                <label>Categories</label>
                <select name="categories" onChange={handleChange}>
                  <option value="shoes">Shoes</option>
                  <option value="cloths">Cloths</option>
                  <option value="accessories">Accessories</option>
                </select>
                <label>Stock</label>
                <select name="inStock" onChange={handleChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <label>To</label>
                <select name="destinedTo" onChange={handleChange}>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                </select>
                <label>Season</label>
                <select name="seasons" onChange={handleChange}>
                  <option value="winter">Winter</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="autumn">Autumn</option>
                </select>
                <label>Promotion</label>
                <input
                  name="promotion"
                  type="number"
                  placeholder="0"
                  onChange={handleChange}
                />
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src={product.img} alt="" className="productUploadImg" />
                  <label for="file">
                    <Publish />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
                <button
                  className="productButton"
                  onClick={(e) => handleUpdate(e)}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
