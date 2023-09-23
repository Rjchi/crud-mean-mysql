"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.updateProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        message: "get products",
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "get product",
        id,
    });
};
exports.getProduct = getProduct;
const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "delete product",
        id,
    });
};
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        message: "update product",
        id,
        body,
    });
};
exports.updateProduct = updateProduct;
const addProduct = (req, res) => {
    const body = req.body;
    res.json({
        message: "add product",
        body,
    });
};
exports.addProduct = addProduct;
