import express from "express";
import {
  getProducts,
  getProduct,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../controllers/product.controllers";

const router = express.Router();

router
  .get("/api/products", getProducts)
  .get("/api/products/:id", getProduct)
  .delete("/api/products/:id", deleteProduct)
  .post("/api/products", addProduct)
  .put("/api/products/:id", updateProduct);

export default router;
