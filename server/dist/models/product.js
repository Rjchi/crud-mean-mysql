"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const connection_1 = __importDefault(require("../db/connection"));
/**-------------------------------------------
 * | Con define podemos configurar el modelo
 * -------------------------------------------*/
const Producto = connection_1.default.define("Producto", {
    name: {
        type: sequelize_1.default.STRING,
    },
    description: {
        type: sequelize_1.default.STRING,
    },
    price: {
        type: sequelize_1.default.DOUBLE,
    },
    stock: {
        type: sequelize_1.default.NUMBER,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Producto;
