import { Sequelize } from "sequelize";

const db = new Sequelize("pruebas", "root", "", {
  host: "localhost",
  dialect: "mysql",
  /**----------------------------------------------
   * | Esto es para ver o no ver las consultas
   * ----------------------------------------------*/
  // logging: false,
});

export default db;
