import express from "express";
import UserRoute from "./routes/user.js";
import ProductRoute from "./routes/product.js";
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);

// used the listen listening method
app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
