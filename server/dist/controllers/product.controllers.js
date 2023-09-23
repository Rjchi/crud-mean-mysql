"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.updateProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield product_1.default.findAll();
    res.json(response);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield product_1.default.findByPk(id);
    if (response) {
        return res.json(response);
    }
    return res.status(404).json({ message: `No existe producto con el id` });
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id);
    if (!product) {
        return res.status(404).json({ message: `No existe el producto` });
    }
    else {
        yield product.destroy();
        return res.json({ message: `Producto eliminado` });
    }
});
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product = yield product_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            return res.json({ message: `El producto fue actualizado con exito` });
        }
        return res.status(404).json({ message: `No existe producto con el id` });
    }
    catch (error) {
        return res.status(500).json({ error: error });
    }
});
exports.updateProduct = updateProduct;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        yield product_1.default.create(body);
        return res.json({ message: `Producto fue agregaado con exito` });
    }
    catch (error) {
        return res.status(500).json({ error: error });
    }
});
exports.addProduct = addProduct;
