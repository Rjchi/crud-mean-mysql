import express from "express";

export const getProducts = (req: express.Request, res: express.Response) => {
  res.json({
    message: "get products",
  });
};

export const getProduct = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  res.json({
    message: "get product",
    id,
  });
};

export const deleteProduct = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  res.json({
    message: "delete product",
    id,
  });
};

export const updateProduct = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    message: "update product",
    id,
    body,
  });
};

export const addProduct = (req: express.Request, res: express.Response) => {
  const body = req.body;
  res.json({
    message: "add product",
    body,
  });
};
