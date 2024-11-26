import { Router } from "express";

//there is still something to correct here, because the product file is not accessing the database

//import { Product } from "../MongoDB/productsDataBase";

const router = Router();

router.get("/api/products", (req, res) => {
  res.send(Product);
});

// router.post("/api/products", (req, res) => {
//   const { body } = req.body;
//   res.send();
// });

export default router;
