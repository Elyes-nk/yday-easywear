const { getSaison } = require("../helpers");
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.categories;
  const qsug = req.query.sug;
  const qGender = req.query.gender;
  const saison = getSaison();
  try {
    let products;
    let options = {};
    if (qsug) {
      options = { ...options, seasons: { $eq: saison } };
    }
    if (qCategory) {
      options = { ...options, categories: { $eq: qCategory } };
    }
    if (qGender) {
      options = { ...options, destinedTo: { $eq: qGender } };
    }

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 });
    } else if (qsug) {
      const productsone = await Product.find(options);
      const productstwo = await Product.find({
        seasons: { $eq: "all" },
        destinedTo: { $eq: qGender },
      });
      const productsthree = await Product.find({
        destinedTo: { $eq: "mixte" },
        seasons: { $eq: saison },
      });
      products = [...productsone, ...productstwo, ...productsthree];
    } else {
      products = await Product.find(options);
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
