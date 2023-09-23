"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = __importDefault(require("../routes/product.routes"));
class Server {
    /**----------------------------------------
     * | En es el punto de entrada de todo
     * ----------------------------------------*/
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => console.log(`SERVER ON PORT ${this.port}`));
    }
    routes() {
        this.app.get("/", (req, res) => {
            return res.json({
                message: "API Working",
            });
        });
        this.app.use(product_routes_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
