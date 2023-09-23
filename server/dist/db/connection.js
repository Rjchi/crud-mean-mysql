"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("pruebas", "root", "", {
    host: "localhost",
    dialect: "mysql",
    /**----------------------------------------------
     * | Esto es para ver o no ver las consultas
     * ----------------------------------------------*/
    // logging: false,
});
exports.default = db;
