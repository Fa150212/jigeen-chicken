
const express = require("express");

const router = express.Router();

const upload = require(
  "../middleware/uploadMiddleware"
);

const {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require(
  "../controllers/productController"
);

router.post(
  "/",
  upload.single("image"),
  createProduct
);

router.get("/", getProducts);

router.delete(
  "/:id",
  deleteProduct
);

router.put(
  "/:id",
  upload.single("image"),
  updateProduct
);

module.exports = router;