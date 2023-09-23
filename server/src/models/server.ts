import db from "../db/connection";
import express from "express";
import routeProduct from "../routes/product.routes";

class Server {
  private app: express.Application;
  private port: string;

  /**----------------------------------------
   * | En es el punto de entrada de todo
   * ----------------------------------------*/
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`SERVER ON PORT ${this.port}`)
    );
  }

  routes() {
    this.app.get("/", (req: express.Request, res: express.Response) => {
      return res.json({
        message: "API Working",
      });
    });

    this.app.use(routeProduct);
  }

  middlewares() {
    this.app.use(express.json());
  }

  async dbConnect() {
    try {
      await db.authenticate();
      console.log("base de datos conectada");
    } catch (error) {
      console.log(error);
    }
  }
}

export default Server;
