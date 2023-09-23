"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("../controllers/product.controllers");
const router = express_1.default.Router();
router
    .get("/api/products", product_controllers_1.getProducts)
    .get("/api/product/:id", product_controllers_1.getProduct)
    .delete("/api/delete/:id", product_controllers_1.deleteProduct)
    .post("/api/add", product_controllers_1.addProduct)
    .put("/api/update/:id", product_controllers_1.updateProduct);
exports.default = router;
