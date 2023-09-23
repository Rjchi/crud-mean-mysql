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
  .get("/api/product/:id", getProduct)
  .delete("/api/delete/:id", deleteProduct)
  .post("/api/add", addProduct)
  .put("/api/update/:id", updateProduct);

export default router;
