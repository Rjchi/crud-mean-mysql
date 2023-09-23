import DataTypes from "sequelize";
import db from "../db/connection";

/**-------------------------------------------
 * | Con define podemos configurar el modelo
 * -------------------------------------------*/
const Producto = db.define(
  "Producto",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    stock: {
      type: DataTypes.NUMBER,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export default Producto;
