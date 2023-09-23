import express from "express";
import Product from "../models/product";

export const getProducts = async (
  req: express.Request,
  res: express.Response
) => {
  const response = await Product.findAll();
  res.json(response);
};

export const getProduct = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const response = await Product.findByPk(id);

  if (response) {
    return res.json(response);
  }

  return res.status(404).json({ message: `No existe producto con el id` });
};

export const deleteProduct = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({ message: `No existe el producto` });
  } else {
    await product.destroy();
    return res.json({ message: `Producto eliminado` });
  }
};

export const updateProduct = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const product = await Product.findByPk(id);

    if (product) {
      await product.update(body);
      return res.json({ message: `El producto fue actualizado con exito` });
    }
    return res.status(404).json({ message: `No existe producto con el id` });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const addProduct = async (
  req: express.Request,
  res: express.Response
) => {
  const body = req.body;
  try {
    await Product.create(body);
    return res.json({ message: `Producto fue agregaado con exito` });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
